const express = require("express")
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

app.listen(port,()=>console.log(`Listening on Port ${port}`))