const express=require('express')
const cors=require("cors");
const bodyParse=require("body-parser")
const session=require("express-session")
const reg=require("./routes/reg")
const login=require("./routes/login")
const member=require("./routes/member")
const product=require("./routes/product")
const cart=require("./routes/cart")
const buy=require("./routes/buy")
const gobuy=require("./routes/gobuy")
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
    saveUninitialized:true
}))
server.use(bodyParse.urlencoded({extended:false}))
server.use('/reg',reg)
server.use('/login',login)
server.use('/member',member)
server.use('/product',product)
server.use('/cart',cart)
server.use('/buy',buy)
server.use('/gobuy',gobuy)

