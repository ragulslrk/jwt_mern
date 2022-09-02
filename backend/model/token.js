const  mongoose =require('mongoose')
const  token_schema=mongoose.Schema({
    access_token:{
        type:String,
        required:false
    },
refresh_token:{
    type:String,
    required:false
}
},{versionKey:false})

const  token_model=mongoose.model('tokens',token_schema)

module.exports=token_model