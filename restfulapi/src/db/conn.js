const mongoose = require("mongoose") 
mongoose.set('strictQuery',false)
mongoose.connect("mongodb://localhost:27017/student-api")
.then(() => {
    console.log("connected sucessfully")
}).catch(() => { 
    console.log("no connection")
})