const express = require('express');


const app = express();
const port = process.env.port

app.get('/', (req, res)=>{
    res.send('hi')
})

app.listen(port || 3001, ()=>{
    console.log('on 3001')
})