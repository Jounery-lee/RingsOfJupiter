import style from "../moduleCSS/body.module.css";

function TableRow({ no, title, date }) {
  return (
    <tbody>
      <tr className={style.tr}>
        <td className={style.td}>{no}</td>
        <td className={style.td}>{title}</td>
        <td className={style.td}>{date}</td>
      </tr>
    </tbody>
  );
}

function Body({ page, setPage, isLogin, setIsLogin }) {
  //page값에 따라 다른게 나오게 됨.
  if (page === "Home") {
    // topics => 글 데이터 topicsList = 데이터를 반복문으로.
    let topics = [
      { id: "1", title: "title1", date: "date1" },
      { id: "2", title: "title2", date: "date2" },
    ];
    let topicsList = topics.map((index) => {
      return (
        <TableRow
          key={index.id}
          no={index.id}
          title={index.title}
          date={index.date}
        />
      );
    });
    function writeTopic() {
      setPage((current) => "Write");
    }
    return (
      <div>
        <div id={style.container}>
          <table className={style.table}>
            <thead>
              <tr className={style.tr}>
                <th id={style.tableNo}>No</th>
                <th id={style.tableTitle}>Title</th>
                <th id={style.tableDate}>Date</th>
              </tr>
            </thead>
            {topicsList}
          </table>
        </div>
        <div>
          1 | 2 | 3 | 4<button onClick={writeTopic}>글쓰기</button>
          <button>목록</button>
        </div>
      </div>
    );
  } else if (page === "Join") {
    //회원가입 페이지
    function join(event) {
      event.preventDefault();
      const memberid = event.target.parentElement[0].value;
      const name = event.target.parentElement[1].value;
      const nickname = event.target.parentElement[2].value;
      const job = event.target.parentElement[3].value;
      const password = event.target.parentElement[4].value;
      const cheakPassword = event.target.parentElement[5].value;

      fetch("https://rings-of-jupiter.herokuapp.com/auth/join", {
        headers: { 
          "content-type": "application/json",
          'Access-Control-Allow-Origin' : 'https://rings-of-jupiter.herokuapp.com' },
        method: "POST",
        body: JSON.stringify({
          memberid: memberid,
          name: name,
          nickname:nickname,
          job: job,
          password: password,
          cheakPassword: cheakPassword,
        }),
      });
    }
    return (
      <form>
        <p>
          Email <input type="email" name="email" placeholder="email" />
        </p>
        <p>
          Name
          <input type="text" placeholder="Name" />
        </p>
        <p>
          Nickname
          <input type="text" placeholder="NickName" />
        </p>
        <p>
          job
          <select>
            <option value="Composer">Composer</option>
            <option value="Instument Player">Instument Player</option>
            <option value="Student">Student</option>
            <option value="Singer & SongWriter">Singer & SongWriter</option>
          </select>
        </p>
        <p>
          Password
          <input type="password" name="Password" placeholder="Password" />
        </p>
        <p>
          Cheak Password
          <input
            type="password"
            name="cheakPassword"
            placeholder="Cheak password"
          />
        </p>
        <input type="submit" value="Join Us" onClick={join} />
      </form>
    );
  } else if (page === "Login") {
    //Login 페이지
    function login(event) {
      const input = event.target.parentElement;
      const id = input[0].value;
      const password = input[1].value;
      event.preventDefault();
      //fetch에서 2번째 인자의.. 공포..
      //http://localhost:3001/auth
      fetch("https://rings-of-jupiter.herokuapp.com/auth", {
        headers: {
          "Content-type": "application/json",
          'Access-Control-Allow-Origin' : 'https://rings-of-jupiter.herokuapp.com'
        },
        method: "POST",
        body: JSON.stringify({
          id: id,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((res) => setIsLogin((current) => res.success));
    }
    if (isLogin === true) {
      setPage((current) => "Mypage");
      return "";
    }
    return (
      <form>
        <p>
          <input type="text" name="id" placeholder="ID" />
        </p>
        <p>
          <input type="password" name="password" placeholder="Password" />
        </p>
        <input type="submit" value="Login" onClick={login} />
      </form>
    );
  } else if (page === "Mypage") {
    const logout = function (event) {
      event.preventDefault();
      setIsLogin((current) => false);
      setPage((current) => "Home");
    };
    return (
      <div>
        <form action="/auth/mypage_process" method="post">
          <p>
            Nickname
            <input
              type="text"
              name="newNickname"
              placeholder="New nickname"
              value="받아온 이름"
              readOnly
            />
          </p>
          <p>
            Profile
            <select name="profile">
              <option value="Composer">Composer</option>
              <option value="Instument Player">Instument Player</option>
              <option value="Student">Student</option>
              <option value="ROCKSTAR">ROCKSTAR</option>
            </select>
          </p>
          <button onClick={logout}>Logout7</button>
        </form>
      </div>
    );
  } else if (page === "Write") {
    function handleWrite(event) {
      event.preventDefault();
      const input = event.target.parentElement;
      const title = input[0].value;
      const description = input[1].value;
      fetch("https://rings-of-jupiter.herokuapp.com/write", {
        headers: { 
          "content-type": "application/json",
          'Access-Control-Allow-Origin' : 'https://rings-of-jupiter.herokuapp.com' },
        method: "POST",
        body: JSON.stringify({
          title: title,
          description: description,
        }),
      });
    }
    return (
      <div>
        <form>
          <p>
            <input type="text" placeholder="title" name="title" />
          </p>
          <p>
            <textarea placeholder="description" name="description" />
          </p>
          <button onClick={handleWrite}>Write</button>
        </form>
      </div>
    );
  }
}

export default Body;

