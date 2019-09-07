const express=require("express");
const router=express.Router();
const pool=require("../pool")

router.get('/',(req,res)=>{
    var shop=req.query.shop
    var sql="SELECT * FROM xony_pro where classify=?"
    pool.query(sql,[shop],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send(result)
            return
        }
    })
})

module.exports= router