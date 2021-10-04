const express = require("express")
const Joi = require("joi")
const bodyParser=require("body-parser");
const path = require("path")
const app = express()
const port = 3000


app.use(express.static('./'))
app.use(express.urlencoded())

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});
// app.get("/contact",(req,res)=>{
//     res.sendFile("./pages/",{root: __dirname})
// })
// app.get("/clinc/",(req,res)=>{
//     res.sendFile("./pages/clinc",{root:__dirname})
// })
app.post("/login",(req,res)=>{
  console.log(req.body);
  const loginShema=Joi.object({
    email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password:Joi.string().min(8).required()
  }).unknown();
  const {value,error}=loginShema.validate(req.body);
  if(error){
    console.log("Error",error);
  }
  else{
    console.log(value);
    res.send("Login completed succesfully!!")
  }
});


app.listen(port,()=>console.log(`Listening on Port ${port}`))