const mongoose = require('mongoose');

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
module.exports = Appointment;