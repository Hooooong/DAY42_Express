// 단일 모듈에도 express 를 require 해야 한다.
var express = require('express');
var router = express.Router();

// ROOT : '/user' 부터 시작
// GET, POST, PUT, DELETE 등 Restful 에 맞춰 작성 가능
router.get('/', function(req, res){
   res.send('Response from User Root!') 
})

module.exports = router;