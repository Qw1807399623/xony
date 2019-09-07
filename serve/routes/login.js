const express=require("express");
const router=express.Router();
const pool=require("../pool")

router.post('/',(req,res)=>{
    var upwd=req.body.upwd
    var uname=req.body.uname
    var login_err="SELECT * FROM xony_reg where uname=?"
    pool.query(login_err,[uname],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            res.send({code:-1,msg:"该用户不存在"})
            return
        }else{
            var login='SELECT * FROM xony_reg where uname=? AND upwd=?'
            pool.query(login,[uname,upwd],(err,result)=>{
                if(err)throw err;
                if(result.length>0){
        // console.log(result)
                    res.send(result)
                    return
                }
            })
        }
    })
})

module.exports= router
