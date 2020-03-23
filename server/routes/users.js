const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/key'); // mongoURI 가져오기
const { User } = require('../models/User'); // 유저모델 가져오기

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 오류 막기 위함
}).then(() => console.log('MongoDB connected...')).catch(err => console.log(err));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// 회원가입
router.post('/register', (req, res) => {

  // 회원가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다.

  // req.body는 JSON 형태

  const user = new User(req.body); // 유저 인스턴스 생성

  // 정보들을 유저모델에 저장
  user.save((err, userInfo) => { 
      if(err) return res.json({success: false, err}) // err시 json형태로 실패한 정보 전달.
      return res.status(200).json({
          success: true
      })
  }); 
});
module.exports = router;
