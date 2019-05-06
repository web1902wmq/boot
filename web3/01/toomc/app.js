const express=require('express');
const bodyParser=require('body-parser');
const userRouter=require('./router/user.js');
var server=express();
server.listen(8080);
//托管静态资源到public
server.use(express.static('public'));
//使用body-parser中间件
server.use(bodyParser.urlencoded({
  extended:false
}));
  //挂载路由器，挂载/user
  server.use('/user',userRouter);