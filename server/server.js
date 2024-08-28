require('dotenv').config()

const express = require('express');
const saleItemsRoutes = require('./routes/saleItems')
// express app
const app = express();

//middleware
app.use((req, res, next)=>{
console.log(req.path, req.method)
next()
})
//Routes
app.use(saleItemsRoutes);
//listen for requests
app.listen(process.env.PORT, ()=>{
    console.log("listeing on port 4000!")
})

process.env