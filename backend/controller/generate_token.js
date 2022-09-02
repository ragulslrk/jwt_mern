const jwt = require("jsonwebtoken");

const  gen_access_token=(user_id)=>{
    console.log('in  the  access');
       const access_token= jwt.sign({id:user_id},'mern_auth_access_secret')
       return access_token
}

const  gen_refresh_token=(user_id)=>{
    console.log('in  the  refresh');

    const refresh_token= jwt.sign({id:user_id},'mern_auth_refresh_secret')
    
    return refresh_token
}

module.exports = {gen_access_token,gen_refresh_token}