const express=require("express");
const router=express.Router();
const pool=require("../pool")

router.get('/',(req,res)=>{
    var uid=req.query.uid
    // console.log(uid)
    var login_err="SELECT * FROM xony_reg where id=?"
    pool.query(login_err,[uid],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send(result)
            // console.log(result)
        }
    })
})

module.exports= router