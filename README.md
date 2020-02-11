# hostel
real-estate platform

# node.js express-generator 셋팅
1. npm install express-generator -g
  - express-generator설치

2. express -h
  - 명령어 확인

3. express --view=pug ./
  - 서버 generate!

4. npm install
  - 다시 인스톨

5. npm start
  - 서버스타트

6. cafe24 적용 셋팅
  - app.js >> web.js
  - bin/www
    -- line7  : require('../app') >> require('../web')
    -- line15 : 3000 >> 8001

 
