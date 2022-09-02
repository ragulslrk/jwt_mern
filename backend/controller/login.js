const  route =require('express').Router()
const user=require('../model/user')
const { body,check } = require('express-validator');
const {gen_access_token,gen_refresh_token}=require('./generate_token')
const  token_db=require('../model/token')

route.get('/login',async(req,res)=>{
  result=await user.findOne({username:req.body.username})
  if(result==null)
  {
    res.send(400).json('Incorrect Username')
  }
  else{
    if(result.password === req.body.password)
{   
    
    const tokens={
        access_token:gen_access_token(result._id),
        refresh_token:gen_refresh_token(result._id)
            }
        const  new_token_db=new token_db(tokens)
        new_token_db.save()

        console.log(tokens);

        res.json(tokens)
    }
    else{
        res.send(400).json('Incorrect Password')
    }
  }

})

module.exports=route