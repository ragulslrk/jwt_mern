const  route =require('express').Router()
const  token_db=require('../model/token')
route.post('/logout',(req,res)=>{
    console.log(req.body.refresh_token);
    if(req.body.refresh_token)
    {   
        token_db.findOneAndDelete({refresh_token:req.body.refresh_token})
        .then(result=>{
            console.log('in logout')
            console.log(result);
            if(result)
            {
                res.send('ok  success')
            }
            
            
        
        })
    }
})
module.exports=route