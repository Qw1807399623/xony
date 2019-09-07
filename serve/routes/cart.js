const express=require("express");
const router=express.Router();
const pool=require("../pool")

router.get('/',(req,res)=>{
    let uid=req.query.uid
    var sql="SELECT * FROM xony_cart where cid=?"
    pool.query(sql,[uid],(err,result)=>{
        if(err)throw err;
        res.send(result)
    })
})

module.exports= router