const express = require('express')
const mongoose = require('mongoose')
const createAccount = require('./routes/createAccount')

const app=express()
const port = 4001

const url = 'mongodb://127.0.0.1/facebookClone'

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on("open", () => {
    console.log('MongoDB connected!');
})

app.use(express.json())

/*app.get('/',(req,res)=>{
    console.log('get request coming.');
    res.send('get req came for /route');
})*/

app.listen(port, () => {
    console.log(`app starting on ${port}`);
})