const express=require("express");
const router=express.Router();
const pool=require("../pool")

router.post('/',(req,res)=>{
    var phone=req.body.phone
    var upwd=req.body.upwd
    var uname=req.body.uname
    var sql_err="SELECT phone FROM xony_reg where phone=?"
    pool.query(sql_err,[phone],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:-1,msg:"用户已存在"})
            return
        }else{
            var sql="INSERT INTO xony_reg set ?"
            var obj={uname,upwd,phone}
            pool.query(sql,[obj],(err,result)=>{
                if(err)throw err;
                var sql="SELECT id FROM xony_reg WHERE phone=? AND upwd=? AND uname=?"
                pool.query(sql,[phone,upwd,uname],(err,result)=>{
                    // console.log(result.id)
                    req.session.uid = result[0]
                    console.log(req.session.uid)
                    res.send({code:1,msg:"注册成功",data:result[0]})
                })
            })
            return
        }
    })
})

module.exports= router




