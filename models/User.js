const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp : {
        type: Number
    }
});

userSchema.pre('save', function(next) { // arrow function을 쓰면 안됨..
    console.log('** save pre function.')
    var user = this;
    console.log(user);
    console.log("check isModified : "+user.isModified())
    if(user.isModified('password')){
        bcrypt.genSalt(saltRounds, (err, salt) => {
            if(err) {
                console.log(err);
                return next(err);
            };
    
            bcrypt.hash(user.password, salt, (err, hash) => {
                if(err) return next(err);
                user.password = hash;
                next();
            });
        });
    }
    else {
        next()
    }
})

userSchema.method.comparePassword = function(plain, callback){
    // 해쉬암호화된 비밀번호 비교
    bcrypt.compare(plain, this.password, function(err, isMatch){
        if(err) return callback(err),
            callback(null, isMatch)
    })
}


const User = mongoose.model('User', userSchema);

module.exports = {User};