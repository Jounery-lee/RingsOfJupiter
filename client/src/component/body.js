import { useState } from "react";
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

function Body({ page, isLogin, setIsLogin }) {
  console.log(isLogin);
  if (page === "Home") {
    return (
      <div id={style.container}>
        <table className={style.table}>
          <thead>
            <tr className={style.tr}>
              <th id={style.tableNo}>No</th>
              <th id={style.tableTitle}>Title</th>
              <th id={style.tableDate}>Date</th>
            </tr>
          </thead>
          <TableRow no="1" title="title1" date="date" />
          <TableRow no="2" title="title2" date="date" />
          <TableRow no="3" title="title3" date="date" />
          <TableRow no="4" title="title4" date="date" />
          <TableRow no="5" title="title5" date="date" />
          <TableRow no="6" title="title6" date="date" />
          <TableRow no="7" title="title7" date="date" />
          <TableRow no="8" title="title8" date="date" />
          <TableRow no="9" title="title9" date="date" />
        </table>
      </div>
    );
  } else if (page === "Join") {
    return (
      <form action="/auth/mypage_process" method="post">
        <p>
          Nickname{" "}
          <input type="text" name="newNickname" placeholder="New nickname" />
        </p>
        <p>
          Profile{" "}
          <select name="profile">
            <option value="Composer">Composer</option>
            <option value="Instument Player">Instument Player</option>
            <option value="Student">Student</option>
            <option value="ROCKSTAR">ROCKSTAR</option>
          </select>
        </p>
        <p>
          Email <input type="email" name="email" placeholder="email" />
        </p>
        <p>
          Password{" "}
          <input type="password" name="Password" placeholder="Password" />
        </p>
        <p>
          Password{" "}
          <input
            type="password"
            name="cheakPassword"
            placeholder="Cheak New password"
          />
        </p>
        <input type="submit" value="Join Us" />
      </form>
    );
  } else if (page === "Login") {
    function login(event) {
      const input = event.target.parentElement;
      const id = input[0].value;
      const password = input[1].value;
      event.preventDefault();
      //fetch에서 2번째 인자의.. 공포..
      fetch("https://rings-of-jupiter.herokuapp.com/auth", {
        headers: {
          "Content-type": "application/json",
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
      return (
        <div>
          <form action="/auth/mypage_process" method="post">
            <p>
              Nickname{" "}
              <input
                type="text"
                name="newNickname"
                placeholder="New nickname"
                value="받아온 이름"
                readOnly
              />
            </p>
            <p>
              Profile{" "}
              <select name="profile">
                <option value="Composer">Composer</option>
                <option value="Instument Player">Instument Player</option>
                <option value="Student">Student</option>
                <option value="ROCKSTAR">ROCKSTAR</option>
              </select>
            </p>
            <input type="submit" value="Logout" readOnly/>
          </form>
        </div>
      );
    } else {
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
    }
  }else if(page === 'Mypage'){
    const logout = setIsLogin(current => false);
    return (
      <div>
        <form action="/auth/mypage_process" method="post">
          <p>
            Nickname{" "}
            <input
              type="text"
              name="newNickname"
              placeholder="New nickname"
              value="받아온 이름"
              readOnly
            />
          </p>
          <p>
            Profile{" "}
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
  }
}

export default Body;
