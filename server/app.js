const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

const mysql = require("mysql2/promise");
const connection = mysql.createConnection({
  host: "us-cdbr-east-06.cleardb.net",
  user: "bbadc38db84c9f",
  database: "heroku_92ea96d00cdd65c",
  password: "2251e22c",
});

app.use(express.static("build"));
app.use(cors());
app.use(bodyParser());
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

app.post("/auth/join", (req, res) => {
  const calledData = req.body;
  async function callDb() {
    //member TABLE을 불러온다. 이게 무슨 문법이냐? 자동수정되는데.
    const db = await (await connection).query("SELECT * FROM member");
    //불러온 TABLE에서 맞는 memeber.id가 있는지 확인하고 return으로 있는 객체를 반환함. 배열의 요소들이 다 객체걸랑.
    function findMemberid(memberid) {
      return memberid.memberid === calledData.memberid;
    }
    // JS의 Array.find()함수 주목!
    const cheakMember = db[0].find(findMemberid);
    //아이디가 기존의 db에 들어있는지 아닌지 확인하는 조건문.
    if (cheakMember === undefined) {
      console.log("가입자격있음");
      // 이건 db에 저장하는 SQL문
      const savemember = await (
        await connection
      ).query(`
      INSERT INTO member (
          memberid, name, job, password, date, nickname)
      VALUES ('${calledData.memberid}', '${calledData.name}', '${calledData.job}', '${calledData.password}', CURRENT_DATE(), '${calledData.nickname}')`);
    } else if (calledData.memberid === cheakMember.memberid) {
      console.log("이미 있는 아이디");
    }
  }

  callDb();
});
app.post("/auth", (req, res) => {
  //frontend에서 fetch POST method의 body에다가 담아준 정보가 req.body로 들어왔다.
  const data = req.body;
  console.log(data);
  if (data.id === memberDB[0].id) {
    if (data.password === memberDB[0].password) {
      res.json({
        success: true,
        id: memberDB[0].id,
        password: memberDB[0].password,
      });
    } else {
      res.json({
        success: false,
        msg: "비번 틀림",
      });
    }
  } else {
    res.json({
      success: false,
      msg: "다틀림",
    });
  }
});

app.post("/write", (req, res) => {
  topics.push(req.body);
});
app.listen(port, () => {
  console.log("on 3001");
});
