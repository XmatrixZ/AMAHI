const mongoose = require('mongoose');
const Joi = require('joi');

const contactusSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        lowercase: true
    },
    subject:{
        type:String,
        required: true
    },
    message:{
        type: String
    }
},{
    timestamps: true
});

const ContactUs = mongoose.model('ContactUs',contactusSchema);

class ValidationError extends Error {
    constructor(message, fieldName) {
      super(message)
      this.fieldName = fieldName
    }
 }

const validateContactUs = (ContactUs)=>{
    const schema = Joi.object({
        name: Joi.string().alphanum().min(3).max(30).required().messages({
            'string.base': `"description" should be a type of 'text'`,
            'string.min': '"title" has to be least {#limit} characters',
            'string.max': '"title" has to be max {#limit} characters',
            'any.required': `"title" is a required field`,
        }),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        subject: Joi.string().max(50).required(),
    }).unknown().options({abortEarly: false});
    return schema.validate(ContactUs)
}

module.exports = {ContactUs, validateContactUs};