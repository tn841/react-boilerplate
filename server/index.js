const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const {auth} = require('./middleware/auth');
const {User} = require('./models/User');


const config = require('./config/key');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json())
app.use(cookieParser())

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
  .catch( (err) => console.log(err));



app.get('/', (req, res) => res.send('Hello World! nodemon!'))

app.get('/api/hello', (req, res) => {
  res.send("안녕하세요.")
})

app.post('/api/user/register', (req, res) => {
  // 회원 가입 시 필요한 정보를 받아 DB에 넣는다.
  const user = new User(req.body)
  
  user.save((err, userinfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })

})

app.post('/api/user/login', (req, res) => {
  console.log(req.body)

  // 요청된 이메일을 DB에서 찾는다.
  User.findOne({email: req.body.email}, (err, user) => {
      if(err) return res.json(err);

      if(!user){
        return res.json({
          loginSuccess: false,
          message: "login fail"
        })
      }
      // console.log(user);
      
      //요청된 이메일이 DB에 있다면, 비밀번호를 검증한다.
      user.comparePassword(req.body.password, (err, isMatch)=>{
        if(!isMatch)
          return res.json({loginSuccess: false, message: 'login fail'})
        
        // 비밀번호가 일치한다면, Token 생성
        user.generateToken((err, userinfo) => {
            if(err) return res.status(400).send(err);
            
            // token은 쿠키나 localstorage에 저장한다.
            res.cookie("x_auth", user.token)
            .status(200).json({
              loginSuccess: true,
              userId: user._id
            })
        })
      })

  })

  
})

app.get('/api/user/auth', auth, (req, res) => {

  res.status(200).json({
    _id : req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    eamil : req.user.email,
    name : req.user.name,
    role: req.user.role,
    image: req.user.image
  })

})

app.get('/api/user/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    {_id:req.user._id},
    {token:""}, 
    (err, user) => {
      if(err) return res.json({success: false, err});
      res.status(200).send({
        success: true
      })
    })
})

//나중에 express에서 제공하는 Router를 이용하여 깔끔히 정리할 예정.

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))