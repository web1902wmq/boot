var signin=function(){
    console.log("登录...");
}
var  signup=function(){
    console.log("注册...");
}
var   signout=function(){
    console.log("注销...");
}
//用一个对象结构，包裹所有成员
//用es6简写
var user={
//属性名：属性值
signin,signup,signout
}
//抛出整个对象模块
module.exports=user;