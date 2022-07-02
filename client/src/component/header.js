import { useState } from "react";
import style from "../moduleCSS/header.module.css";
import title from "../src_assets/title.png";

function Sidenav({ navWidth, onClick, handlePage, isLogin }) {
  //좌측에서 움직이는 세로 줄 메뉴 Component
  //isLogin의 값에 따라 보여주는 메뉴가 달라짐.
  const loginState =
    isLogin === false ? (
      <div>
        <a href="/auth/mypage" onClick={handlePage}>
          Join
        </a>
        <a href="/auth/logout_process" onClick={handlePage}>
          Login
        </a>
      </div>
    ) : (
      <div>
        <a href="/auth/logout_process" onClick={handlePage}>
          Mypage
        </a>
      </div>
    );

  return (
    <div id={style.mySidenav} style={{ width: navWidth, opacity: navWidth }}>
      <a id={style.closeSideNavBtn} onClick={onClick}>
        &times;
      </a>
      <a href="/" onClick={handlePage}>
        Home
      </a>
      {loginState}
    </div>
  );
}

function Header({ setPage, isLogin }) {
  const [navWidth, setnavWidth] = useState(0);
  const handleNavWidth = () => {
    if (navWidth === 0) {
      setnavWidth((current) => 250);
    } else {
      setnavWidth((current) => 0);
    }
  };

  const handlePage = (event) => {
    event.preventDefault();
    const clickedPage = event.target.innerText;
    if (clickedPage === "Home") {
      setPage((current) => "Home");
    } else if (clickedPage === "Join") {
      setPage((current) => "Join");
    } else if (clickedPage === "Login") {
      setPage((current) => "Login");
    } else if (clickedPage === "Mypage") {
      setPage((current) => "Mypage");
    }
  };
  return (
    <div id={style.header}>
      <i
        id={style.menu}
        className="fa-solid fa-bars fa-2xl"
        onClick={handleNavWidth}
      ></i>
      <img id={style.logo} src={title} alt="title" />
      <i id={style.icon} className="fa-solid fa-circle-notch fa-spin"></i>
      <span>Rings of Jupiter</span>
      <Sidenav
        navWidth={navWidth}
        onClick={handleNavWidth}
        handlePage={handlePage}
        isLogin={isLogin}
      />
      <div id={style.welcomeMsg}>
        <p>취향나눔 소규모 커뮤니티</p>
      </div>
    </div>
  );
}

export default Header;
