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
        password : "123",
    },
    {
        id : 'BSV',
        password : "321",
    }
]



app.post('/auth', (req, res)=>{
    //frontend에서 fetch POST method의 body에다가 담아준 정보가 req.body로 들어왔다.
    const data = req.body
    if(data.id === memberDB[0].id){
        if(data.password === memberDB[0].password){
            res.json({
                success: true,
                id: memberDB[0].id,
                password: memberDB[0].password
            })
        }else{
            res.json({
                success: false,
                msg: "비번 틀림"
            })
        }
    }else{
        res.json({
            success: false,
            msg: "다틀림",
        })
    }
})


app.listen(port, ()=>{
    console.log('on 3001')
})