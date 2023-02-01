const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/demotest").then(() => {
    console.log("connected successfully")
}).catch(() => {
    console.log("connection faild")
})


//schema
// a mongoose schema defines  the structure of the  document,
// default values ,validation,etc..

const playlistschema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique:true,
        lowercase:true
    },
    ctype: String,
    video: Number,
    auther: String,
    date: {
        type: Date,
        default: Date.now

    }

})


// collection creation 
const playlist = new mongoose.model("playlistss", playlistschema)

// create document or insert

const createDocument = async () => {
    try {
        // const reactPlayList = new playlist({
        //     name: "shivam1",
        //     ctype: "javascript1",
        //     video: 120,
        //     auther: "sam",
        //     active: true
        // })
        // const reactPlayList1 = new playlist({
        //     name: "shivam2",
        //     ctype: "javascript2",
        //     video: 150,
        //     auther: "sam",
        //     active: true
        // })
        // const reactPlayList2 = new playlist({
        //     name: "shivam3",
        //     ctype: "javascript2",
        //     video: 150,
        //     auther: "sam",
        //     active: true
        // })
        const reactPlayList3 = new playlist({
            name: "shivAm4-SaM",
            ctype: "javascript3",
            video: 150,
            auther: "sam",
            active: true
        })
        const result = await playlist.insertMany([
            // reactPlayList, reactPlayList1, reactPlayList2, 
            reactPlayList3])

    } catch (error) {

    }
}
createDocument()

const getDocument = async () => {
    const result = await playlist
    // .find({ video: { $gt :120}}) //greater then condition
    // .find({ video: { $lte :120}}) // less then condition
    .find({ctype:{$in:["javascript3",150]}}) // if any of the value is availabe in object then it will show the object
    // .select({name:1})
    // .limit(1)
    // console.log(result)
}

// getDocument()

const updateDocument = async (_id) => {
    try{
        const result = await playlist.findByIdAndUpdate({_id},{
            $set:{
                name:"pythen1"
            }
        }, {
            new:true
        }) // if any of the value is availabe in object then it will show the object
       
        console.log(result) 
    }
    catch(error){
        console.log("errror",error)
    }
}

// updateDocument("63d7af3c04c0d88fd569d3ef")



const deleteDocument = async (_id) => {
    try{
        const result = await playlist.findByIdAndDelete({_id} , {
            new:true
        }) // if any of the value is availabe in object then it will show the object
       
        console.log(result) 
    }
    catch(error){
        console.log("errror",error)
    }
}

// deleteDocument("63d7af3c04c0d88fd569d3ef")