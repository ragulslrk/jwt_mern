const route=require('express').Router()
const  verify=require('./verify')
const  user=require('../model/user')

route.post('/dashboard',verify,(req,res)=>{
        if(req.user)
        {
            user.findOne({_id:req.user.id})
            .then(result=>{
                if(result)
                {
                    res.send(result)
                }
                else{
                    return res.status(403).json('your not authenticated')
                }
                
            })
            .catch(err=>{
                console.log(err);
            })
        }

    
})
module.exports=route 