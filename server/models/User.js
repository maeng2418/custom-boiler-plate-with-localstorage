const mongoose = require('mongoose');

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

const User = mongoose.model('User', userSchema); // schema를 모델로 감싸줌. (모델이름, 스키마)

module.exprots = {User}; // 다른곳에서도 쓸 수 있음. 