const  jwt=require("jsonwebtoken");
const  token_db=require('../model/token')
const  verify=(req,res,next)=>{
console.log('in verify');
    const token=req.body.access_token
    console.log(token);
    if(token)
    {   token_db.findOne({access_token:token})
        .then(result=>{
            
            if(result)
            {
            console.log(result,'this is result')
                jwt.verify(token,'mern_auth_access_secret',(err,user)=>{
                    if(err)
                    {
                        console.log(err)
                    return res.status(403).json('your  not authenticated1')
    
                    }
                    else{
                        req.user=user
                        next()
                    }
                })
            }
            else{
            return res.status(403).json('your  not authenticated3')

            }
        })
            
    }
    else{
        return res.status(403).json('your  not authenticated2')
    }

}



module.exports=verify