const express = require("express");

const dotenv = require("dotenv");
const aws = require('aws-sdk');

// let s3 = new aws.S3({
//   accessKeyId: process.env.S3_KEY,
//   secretAccessKey: process.env.S3_SECRET,
//   password: process.env.REACT_APP_MYSQL,
// });

// const MYSQLPW = s3.config.password

dotenv.config();

const mysql = require("mysql2/promise");
const connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bbadc38db84c9f",
  database: "heroku_92ea96d00cdd65c",
  password: process.env.REACT_APP_MYSQL,
});

const router = express.Router();

router.post("/write", (req, res) => {
  console.log(req.body);
  //req.body로 넘어오는 정보가 모자라서 아직 db저장은 구현하지 않음.
  async function callDb(){
    await (await connection).query(`
    INSERT INTO topic(title, description, date, author)
    VALUES ('${req.body.title}', '${req.body.description}', CURRENT_DATE(), '${req.body.author}')`)
  }
  callDb()
});

module.exports = router;
