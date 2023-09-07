const express = require('express')
// import  express  from "express";

const products_routes = require('./routes/products')
// import { products_routes} from "./routes/products.js";

const app = express()
const PORT = 5000;


app.get('/',(req,res)=>{
    console.log(req.url);
    
    res.send('here is the first page')
})

app.use('/api/producs',products_routes)
app.get('/product',(req,res)=>{
    console.log(req.url);

    res.send('here is the product page')
})

const start = async()=>{
 try {
    app.listen(PORT,()=>{
        console.log("the server is running on port number "+ PORT);
    })
    
 } catch (error) {
    console.log(error+"bhai ye error 22 line number pe hai");
 }
}


start()