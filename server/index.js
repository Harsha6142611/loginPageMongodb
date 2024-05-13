const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const UserModel = require("./models/Userdata")
const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.xaflbhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");


app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user =>{
        if(user){
            if(user.password === password){
                res.json("Success")
            }else {
                res.json("password is incorrect")
            }
        } else{
            res.json("User is not found")
        }
    })
})

app.post('/register', (req, res) =>{
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



app.listen(3001, ()=>{
    console.log("Server is running...");
})