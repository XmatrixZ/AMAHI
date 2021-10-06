const Appointment = require("../models/appointment");
const {ContactUs, validateContactUs} = require("../models/contactus");

module.exports.home = function(req, res){
    return res.render('AMAHI/index.html', {
    });
}

module.exports.newAppointment=function(req,res){
    Appointment.create(req.body, function(err, email){
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('/');
    })
};

module.exports.newContact=function(req,res){
    console.log(req.body);
    ContactUs.create(req.body, function(err, email){
        if(err){
            console.log(err);
            return;
        }
        return res.redirect('/');
    })
};