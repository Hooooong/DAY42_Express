var express = require('express');
var app = express();

// store
// routing 기술을 통해 기능별로 js 를 구성할 수 있다.
var store = require('./routes/store');
var user = require('./routes/user');

// url 요청에 따라 모듈을 분리해준다.
app.use('/store', store);

// public Directory 아래애 정적파일(image, video, etc...)을 읽어서 넘겨준다.
app.use('/image', express.static('image'));

app.listen(8090, function(){
    console.log('Server is Running....');
})