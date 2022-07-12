const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;
const auth = require("./routes/auth.js");
const crud = require("./routes/crud.js")
const dotenv = require("dotenv");

dotenv.config();

const mysql = require("mysql2/promise");
const connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bbadc38db84c9f",
  database: "heroku_92ea96d00cdd65c",
  password: process.env.REACT_APP_MYSQL,
});

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.get("/topicdata", (req, res)=>{
  async function callDb(){
    const topicList = await (await connection).query("SELECT * FROM topic")
    console.log('topiclist 불러옴')
    res.send(topicList[0])
  }
  callDb();
})

app.use("/auth", auth);
app.use("/crud", crud)

app.listen(port, () => {
  console.log("on 3001");
});
