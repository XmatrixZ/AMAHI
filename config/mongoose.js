const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Sajal:JNM1I96B5l5JmBo6@cluster0.zjxbd.mongodb.net/Amahi?retryWrites=true&w=majority');
const db = mongoose.connection;
db.on('error',console.error.bind(console,"Error in connecting to MongoDB database."));
db.once('open',function(){
    console.log('Successfully connected to database!!!');
});
module.exports = db;