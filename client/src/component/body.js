import style from "../moduleCSS/body.module.css";

function Body({ page }) {
  if (page === "HOME") {
    return (
      <div id={style.container}>
        <table className={style.table}>
          <tr className={style.tr}>
            <th id={style.tableNo}>No</th>
            <th id={style.tableTitle}>Title</th>
            <th id={style.tableDate}>Date</th>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>1</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/06/28</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>2</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/06/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
          <tr className={style.tr}>
            <td className={style.td}>3</td>
            <td className={style.td}>데이터를 받아와서 여기다가 넣어준다. 글쓰기가 일어날 때 한줄씩 늘어나게 한다.</td>
            <td className={style.td}>2022/03/29</td>
          </tr>
        </table>
      </div>
    );
  } else {
    return (
        <form action="/auth/mypage_process" method="post">
      <p>
      Nickname <input type="text" name="newNickname" placeholder="New nickname" /></p>
      <p>
      Profile <select name="profile">
          <option value="Composer">Composer</option>
          <option value="Instument Player">Instument Player</option>
          <option value="Student">Student</option>
          <option value="ROCKSTAR">ROCKSTAR</option>
      </select>
      </p>
      <p>Email <input type="hidden" name="email" placeholder="email" value="${email}" /> email</p>
      <p>Password <input type="password" name="oldPassword" placeholder="Old Password" /></p>
      <p>Password <input type="password" name="newPassword" placeholder="New Password" /></p>
      <p>Password <input type="password" name="cheakPassword" placeholder="Cheak New password" /></p>
      <input type="submit" value="Update" />
      </form>
    );
  }
}

export default Body;
