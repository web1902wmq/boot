const express=require('express');
//引入连接池
var router=express.Router();
const pool=require('../pool.js');
//用户注册
router.post('/reg',function(req,res){
	    var $phone=req.body.phone;

	var $upwd=req.body.upwd;
//	if(!$phone){
//	 res.send('手机号不存在');
//	 return;
//	}
//	if(!$upwd){
//	 res.send('密码不存在');
//	 return;
//	}
	

	var sql="insert into toomc_user set ?";
	pool.query(sql,[req.body],(err,result)=>{
	 if(err)throw err;
	  if(result.affectedRows>0){
	   res.send("注册成功");
	  }else{
	   res.send("注册失败");
	  }
	});
});
   //登录
router.post('/login',function(req,res){
	    var $phone=req.body.phone;
	var $upwd=req.body.upwd;
	if(!$phone){
	 res.send('手机号存在');
	 return;
	}
	if(!$upwd){
	 res.send('密码存在');
	 return;
     }
    
 	var sql="select * from toomc_user where phone=? and upwd=?";
	pool.query(sql,[$phone,$upwd],(err,result)=>{
	 if(err)throw err;
	  if(result.length>0){
	   res.send("登录成功");
	  }else{
	  res.send("登录失败");
	}
	});
});

//导出路由器
module.exports=router;