const Joi = require("joi");
const mongoose =require("mongoose");
const Schema=mongoose.Schema;

const loginSchema=new Schema({
    email:{
        type:string,
        required:true,
        lowercase:true
    }
    ,
    password:{
        type:string,
        required:true
    }
},{timestampes:true});

const Login= mongoose.model('Login',loginSchema);
const validateEmail=(Login)=>{
    const schema=joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().min(8).required()
    })
    return schema.validate(Login);

}
module.exports={
    Login,validateEmail
}

