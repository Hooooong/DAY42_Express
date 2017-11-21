Android Programing
----------------------------------------------------
### 2017.11.16 34일차

#### 예제
____________________________________________________

#### 공부정리
____________________________________________________

##### __Express__

- Express 란?

  > Express.js는 Node.js의 핵심 모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크다. 그러한 컴포넌트를 미들웨어(middleware)라고 하며, 설정보다는 관례(convention over configuration)와 같은 프레임워크의 철학을 지탱하는 주춧돌에 해당한다. 즉, 개발자들은 특정 프로젝트에 필요한 라이브러리를 어떤 것이든 자유롭게 선택할 수 있으며, 이는 개발자들에게 유연함과 수준 높은 맞춤식 구성을 보장한다.

- Express 사용법

  1. Express 기본 설치

      - 명령어 실행

      ```
      <!-- npm init 을 통해 package.json 파일 작성 -->
      <!-- 기본 파일은 entry poing 일 때 설정(파일명) -->
      npm init

      <!-- 설치가 되었으면 실행 -->
      npm install express
      ```

      - 기본 파일 설정(index.js)

      ```javascript
      // Express 모듈 설정
      var express = require('express');
      // express 설정
      var app = express();

      // user
      // routing 기술을 통해 기능별로 js 를 구성할 수 있다.
      var user = require('./routes/user');

      // url 요청에 따라 모듈을 분리해준다.
      app.use('/user', user)

      // /image 경로로 들어오는 요청들은
      // image Directory 아래애 정적파일(image, video, etc...)을 읽어서 넘겨준다.
      app.use('/image', express.static('image'));

      // app 은 서버를 시작하며, 8090 port 에서 연결을 대기한다.
      app.listen(8090, function(){
          console.log('Server is Running....');
      })
      ```

      - routes 파일 설정(user.js)

      ```javascript
      // 단일 모듈에도 express 를 require 해야 한다.
      var express = require('express');
      var router = express.Router();

      // ROOT : '/user' 부터 시작
      // GET, POST, PUT, DELETE 등 Restful 에 맞춰 작성 가능
      router.get('/', function(req, res){
         res.send('Response from User Root!')
      })

      module.exports = router;
      ```

  2. Express 생성기

      - 명령어 실행

      ```
      npm install express;
      npm install express -generator -g
      express --view=ejs abc
      cd abc
      npm install
      npm start
      ```
