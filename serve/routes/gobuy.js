const express=require("express");
const router=express.Router();
const pool=require("../pool")

router.get('/',(req,res)=>{
    let pname=req.query.pname
    let pimg=req.query.pimg
    let uid=req.query.uid
    let price=req.query.price
    var sql="SELECT count FROM xony_cart where cid=? AND pname=?"
    pool.query(sql,[uid,pname],(err,result)=>{
        if(err)throw err;
        if(result.length==0){
            var count=1
            var sql_cart="INSERT INTO xony_cart VALUES (?,?,?,?,?)"
            pool.query(sql_cart,[uid,pname,pimg,price,count],(err,result)=>{
                if(err)throw err;
                console.log(result)
                res.send(result)
            })
        }else{
            var count=++result[0].count
            var sql_list="UPDATE xony_cart SET count=? where cid=? AND pname=?"
            pool.query(sql_list,[count,uid,pname],(err,result)=>{
                if(err)throw err;
                res.send(result)
            })
        }
        
    })
})

module.exports= router