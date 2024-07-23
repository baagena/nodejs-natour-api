const express = require("express")

const app = express();

app.get('/', (req,res) =>{
    res.status(200).json({message: "Hello from server", status: "success"})
})

app.post('/', (req, res) =>{
    res.send("you can now post on this endpoint....")
})

const port = 3000;
app.listen(port, () => {
    console.log(`App learning on port ${port}`)
})