const express =require ('express');
const app = express();
const Router =require ('./controller/main-controller')
const nocache=require('nocache')
const session = require("express-session")

// const ejs=require('ejs')
const bodyparser=require('body-parser')
 app.use (bodyparser.urlencoded({extended:true}))

app.use(session({
    secret:"shibin",
    resave:false,
    saveUninitialized:true
}))
 app.use(nocache())
 app.use(express.json())
const port=3002
app.set('view engine','ejs')

app.use('/',Router)
app.use('/controller',express.static('controller'))


app.listen(port,()=>{
console.log('server is started');


})