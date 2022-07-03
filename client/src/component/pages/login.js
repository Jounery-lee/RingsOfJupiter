function Login(setIsLogin, setPage, isLogin){
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
}

export default Login