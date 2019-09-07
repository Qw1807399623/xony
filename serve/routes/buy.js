const express=require("express");
const router=express.Router();
const pool=require("../pool")

router.get('/',(req,res)=>{
    let pid=req.query.pid
    var sql="SELECT * FROM xony_pro where pid=?"
    pool.query(sql,[pid],(err,result)=>{
        if(err)throw err;
        console.log(result)
        res.send(result)
    })
})

module.exports= router