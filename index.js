const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const db = require('./config/mongoose.js');
var bodyParser = require('body-parser');

app.use(express.static('./'))
app.use(express.urlencoded({
  extended: true
}))

// app.get("/", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });
// app.get("/contact",(req,res)=>{
//     res.sendFile("./pages/",{root: __dirname})
// })
// app.get("/clinc/",(req,res)=>{
//     res.sendFile("./pages/clinc",{root:__dirname})
// })

app.use('/', require('./routes'));
app.listen(port,()=>console.log(`Listening on Port ${port}`))