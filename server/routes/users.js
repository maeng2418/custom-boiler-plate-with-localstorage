const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const config = require('../config/key'); // mongoURI 가져오기

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false // 오류 막기 위함
}).then(() => console.log('MongoDB connected...')).catch(err => console.log(err));

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
