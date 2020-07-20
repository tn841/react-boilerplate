const {User} = require('../models/User');

let auth = (req, res, next) => {
    // 인증 처리 구현
    // 1. cookie에서 token 얻기
    let token = req.cookies.x_auth;

    // 2. token을 복호화 한 후 User를 찾는다.
    User.findByToken(token, (err, user) => {
        console.log('-- auth middleware --')
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error: true})
        req.token = token;
        req.user = user;
        next();
    })


    // 3. User가 존재하면 인증 성공

}

module.exports = {auth};