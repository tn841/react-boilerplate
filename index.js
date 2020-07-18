const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const {User} = require('./models/User');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json())

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://tn841:rlatnals1!@boilerplate.p4wnu.mongodb.net/boilerplate?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected..'))
  .catch( (err) => console.log(err));



app.get('/', (req, res) => res.send('Hello World! nodemon!'))

app.post('/register', (req, res) => {
  // 회원 가입 시 필요한 정보를 받아 DB에 넣는다.
  console.log(req)
  const user = new User(req.body)
  user.save((err, userinfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })

})


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))