const express = require("express")
require("./db/conn")
const Strudent = require("./models/students")
const studentRouter = require ("./routers/student")


const app = express()
const port = process.env.PORT || 3000  



app.use(express.json())
app.use(studentRouter)


//1 create a new router
// const router =new express.Router() 
 
// 2 need to define a router
// router.get("/as",(req,res)=>{

//    res.send("hello man")
// })

// 3 need to registor our router
// app.use(router)

// create a new studen
 
 

app.listen(port, () => {

   console.log("ha bhai sab sahi hia")
})