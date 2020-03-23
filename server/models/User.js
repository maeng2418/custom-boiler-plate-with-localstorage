const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); // 비밀번호 암호화 하기
const saltRounds = 10; // Salt를 이용해서 비밀번호를 암호화 => salt를 10자리로 설정.

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50 // 최대길이 제한
    },
    email: {
        type: String,
        trim: true, // 스페이스(공백) 없애줌
        unique: 1 // 유일함
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    // 관리자인지 일반 유저인지
    role: {
        type: Number,
        default: 0
    },
    image: String,
    // 유효성 관리
    token: {
        type: String
    },
    // 토큰 유효기간 설정
    tokenExp: {
        type: Number
    }
});

// 정보들을 유저모델을 저장하기 전에 실행해줌.
userSchema.pre('save', function( next ){
    var user = this; // userSchema를 가리키게 됨.

    if(user.isModified('password')){ // 비밀번호가 바뀔 때만 암호화
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt) { // Salt 생성
            if(err) return next(err);
            bcrypt.hash(user.password, salt, function (err, hash){
                if(err) return next(err);
                // Store hash in you password DB
                user.password = hash // 암호화된 비밀번호로 교체
                next(); // 다음꺼 실행(유저모델 저장)
            });
        });
    } else { // 비밀번호가 아닌 다른정보 바꿀 시, 그냥 넘어감(next())
        next();
    }
});


const User = mongoose.model('User', userSchema); // schema를 모델로 감싸줌. (모델이름, 스키마)

module.exports = {User}; // 다른곳에서도 쓸 수 있음.