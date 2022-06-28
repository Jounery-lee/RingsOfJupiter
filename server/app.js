const express = require('express');


const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/build/index.html")
})
app.use(express.static('build'))

app.listen(port, ()=>{
    console.log('on 3001')
})