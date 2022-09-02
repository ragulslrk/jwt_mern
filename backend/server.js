const express=require('express')
const mongoose=require("mongoose") 
const app =express()

const cors = require('cors');
app.use(express.urlencoded({extended:true}));
app.use(cors());
require("dotenv").config()

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

    app.get('/',(req,res)=>{
        res.send('this  is home ')
    })