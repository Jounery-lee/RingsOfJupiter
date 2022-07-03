function Join(){
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
}

export default Join