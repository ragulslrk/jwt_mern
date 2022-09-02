const  route =require('express').Router()
const jwt= require("jsonwebtoken");
const  token_db=require('../model/token')
const {gen_access_token,gen_refresh_token}=require('./generate_token')

route.post('/refresh',(req,res)=>{
    console.log(req.body.token)
    if(req.body.token)
    {
        jwt.verify(req.body.token,'mern_auth_refresh_secret',(err,user)=>{
          
            if(err)
            {   console.log(err);
                return res.status(401).json("You are not authenticated1!");
            }
            token_db.findOne({refresh_token:req.body.token})
            .then(result=>{
                if(result)
                {
                   const  access_tok= gen_access_token(user._id)
                   const refresh_tok=gen_refresh_token(user._id)
                   const tokens={
                            access_token:access_tok,
                            refresh_token:refresh_tok
                        }
                        result.access_token=access_tok
                        result.refresh_token=refresh_tok
                        result.save()
                        res.json(tokens)
                }
                else{
                    return res.status(401).json("You are not authenticated2!");
                }
            })
        }
        )
    }
    else{
        return res.status(401).json("You are not authenticated!");
    }

})
module.exports=route