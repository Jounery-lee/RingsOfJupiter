const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const mysql = require("mysql2/promise");
const connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bbadc38db84c9f",
  database: "heroku_92ea96d00cdd65c",
  password: process.env.MYSQL,
});

const router = express.Router();

router.post("/write", (req, res) => {
  console.log(req.body);
  //req.body로 넘어오는 정보가 모자라서 아직 db저장은 구현하지 않음.
  async function callDb(){
    const calledData = await (await connection).query('SELECT * FROM topic')
    console.log(calledData[0])
  }
  callDb()
});

module.exports = router;
