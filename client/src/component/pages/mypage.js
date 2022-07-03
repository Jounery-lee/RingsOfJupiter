function Mypage(setIsLogin, setPage) {
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
}

export default Mypage;
