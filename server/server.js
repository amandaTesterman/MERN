require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const saleItemsRoutes = require('./routes/saleItemRoutes');
// express app
const app = express();

//middleware
app.use((req, res, next)=>{
console.log(req.path, req.method)
next()
})
//Routes
    // if in post or patch there is data to dtabase it checks to see if there is body???
app.use(express.json)
app.use('/api/saleItems' , saleItemsRoutes);

// connect to DB 
mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        //listen for requests

        //when I moved this insidee here I started getting errors
        //when i use mongodb code snippet I can connect
        app.listen(process.env.PORT, ()=>{
            console.log("listeing on port 4000!")
})
    })
    .catch((error) =>{
        console.log(error)
    })


process.env