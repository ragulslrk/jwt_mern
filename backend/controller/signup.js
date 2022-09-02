const  route =require("express").Router()
const  user =require('../model/user')


route.post('/signup',(req,res)=>{
    console.log('this is signup')
  user.create(req.body)


 res.sendStatus(200)
})

module.exports=route