const express = require("express")
const port = 3000

const app = express()
let data = `<h1>
ha bhai sab sahi hai
</h1>
<h3>
chalo badiya hai
</h3>`

app.get("/", (req, res) => {

    res.send("<h3>hello this is express</h3>")

})

app.get("/about", (req, res) => {

    res.send("now you now about me")

})


app.listen(port, () => {
    console.log(`listening this port ${port}`)
})