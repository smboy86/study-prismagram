# study-prismagram

노마드코더 동영상강의 따라잡기

# 프리즈마 설치

1. 설치

- npm install -g prisma

2. 프리즈마그램 서비스 가입

- https://app.prisma.io/
- new Serive 생성

3. 프리스마그램 로그인

- prisma login -k eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjazQ0OG5mbjhudzRhMDg2MWtieWRhd3RsIiwiaWF0IjoxNTc2MjQ2ODEzLCJleHAiOjE1Nzg4Mzg4MTN9.LysvGcD7zF
  \_tRaxNzS1OmbQSgiLDuVUghnBxqhW1iQw

4. 프리즈마 서버 생성

- prisma init

5. 프리즈마 서버(?) 실행

- yarn dev :: nodemon --exec babel-node src/server.js

- yarn add prisma-client-lib :: 프리즈마 관련 라이브러리 설치

# 설치 라이브러리

1.  graphql-yoga ::  
    yarn add graphql-yoga

2.  nodemon ::  
    yarn add nodemon -D

3.  babel-node ::  
    yarn add babel-node

4.  babel-cli :: 다시 삭제한듯?  
    yarn add babel-cli -D

5.  dotenv ::  
    yarn add dotenv

6.  babel  
    yarn add @babel/{core,node,preset-env}

7.  morgan  
    yarn add morgan

8.  ddd  
    yarn add graphql-tools merge-graphql-schemas

# node 로 메일 보내기

yarn add nodemailer :: https://nodemailer.com/about/

https://sendgrid.com/

yarn add nodemailer-sendgrid-transport
