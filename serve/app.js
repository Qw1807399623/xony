const express=require('express')
const cors=require("cors");
const bodyParse=require("body-parser")
const session=require("express-session")
var server=express();
server.use(express.static("public"))
server.listen(3000)
server.use(cors({
    origin:["http://127.0.0.1:8080","http://localhost:8000"],
    credentials:true
}))
server.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true,
}))
server.use(bodyParse.urlencoded({extended:false}))


