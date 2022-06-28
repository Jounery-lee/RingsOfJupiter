const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = process.env.PORT || 3001;

app.use(express.static('build'))
app.use(cors())
app.use(bodyParser())
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/build/index.html")
})

const memberDB = [
    {
        id : '주연',
        password : 123,
    },
    {
        id : 'BSV',
        password : 321,
    }
]

app.post('/auth', (req, res)=>{
    if(req.body.id === memberDB[0].id){
        if(Number(req.body.password) === memberDB[0].password){
            res.send(memberDB)
        }else{
            res.send('sword')
        }
    }else{
        res.send(memberDB)
    }
})


app.listen(port, ()=>{
    console.log('on 3001')
})