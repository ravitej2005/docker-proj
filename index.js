const express = require("express")

const app = express();

app.get('/',(req,res)=>{
  console.log("in home route");
  return res.json({
    "msg" : "node js ......"
  })
})
app.get('/home',(req,res)=>{
  console.log("in home route");
  return res.json({
    "msg" : "node js ...... home api"
  })
})
app.get('/about',(req,res)=>{
  console.log("in home route");
  return res.json({
    "msg" : "node js ...... about api"
  })
})
app.get('/services',(req,res)=>{
  console.log("in home route");
  return res.json({
    "msg" : "node js ...... services api"
  })
})
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
  console.log("server started on 5000...",PORT);
})
