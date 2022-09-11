const express=require('express')
const mongoose=require("mongoose") 
const app =express()

const cors = require('cors');
app.use(express.urlencoded({extended:true}));
app.use(express.json({limit:'1mb'}))
app.use(cors());
const path = require('path');
require("dotenv").config()
app.set("view engine","ejs")
    app.use(express.static(path.join(__dirname, 'build')));
console.log(__dirname)

    mongoose.connect( 'mongodb+srv://ragulNolan:%23Ragul4444@cluster0.6qh9t.mongodb.net/mern_auth?retryWrites=true&w=majority',{useNewUrlParser: true,useUnifiedTopology: true})
    .then((res)=>{
        app.listen(process.env.PORT ||3232,()=>{
            console.log('this jwt project ')
    })
    console.log('success jwt project ')})
    .catch((err)=>{console.log(err)})

    //route to login  
    const login =require('./controller/login')
    app.use(login)

    //route to signup  
    const signup =require('./controller/signup')
    app.use(signup)
    
//route  to refresh
const  refresh=require('./controller/refresh_token')
app.use(refresh)

//route to das
const  das=require('./controller/dashboard')
app.use(das)


//route  to logout
const  logout=require('./controller/logout')
app.use(logout)

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
  app.post('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });