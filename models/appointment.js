const mongoose = require('mongoose');
const Joi = require("joi");

const appointmentSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type:String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    Departments:{
        type: String,
        required: true
    },
    Doctor:{
        type: String,
        required: true
    },
    Hospital:{
        type: String,
        required: true
    },
    Message:{
        type: String
    }
},{
    timestamps: true
});

const Appointment = mongoose.model('Appointment',appointmentSchema);

class ValidationError extends Error {
  constructor(message, fieldName) {
    super(message);
    this.fieldName = fieldName;
  }
}

const validateAppointment = (Appointment) => {
  const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required().messages({
      "string.base": `"description" should be a type of 'text'`,
      "string.min": '"title" has to be least {#limit} characters',
      "string.max": '"title" has to be max {#limit} characters',
      "any.required": `"title" is a required field`,
    }),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    subject: Joi.string().max(50).required(),
  })
    .unknown()
    .options({ abortEarly: false });
  return schema.validate(Appointment);
};

module.exports = {Appointment,validateAppointment};