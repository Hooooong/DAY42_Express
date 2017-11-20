// 단일 모듈에도 express 를 require 해야 한다.
var express = require('express');
var router = express.Router();

var url = require('url');
var qs = require('querystring');

// ROOT : '/store' 부터 시작
// GET, POST, PUT, DELETE 등 Restful 에 맞춰 작성 가능
router.get('/', function(req, res){
   res.send('Response from Store Root!') 
})

router.get('/detail', function(req, res){
    res.send('Response from Store/detail');
    console.log('url : ' + req.url);

    // url Parsing
    var url_parse = url.parse(req.url);
    // query Parsing
    // ? 뒤에 오는 문자열
    var queryString = qs.parse(url_parse.query)

    console.log('id : ' + queryString.id);

})

router.post('/', function(req, res){
    var post_obj = "";
    
    req.on('data', function(data){
        // data : {"id" : "h921013", "name" : "이흥기"}
        post_obj += data;
    })
    
    req.on('end', function(){
        // 데이터 처리
        var postObj = JSON.parse(post_obj);
        res.send("Response from POST store")
        
        // var postObj = {
        //    id : "h921013",
        //    name : "이흥기"
        // }
        console.log(postObj.id);
        console.log(postObj.exportsname);
    })
})
module.exports = router;