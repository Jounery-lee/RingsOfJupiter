import Home from "./pages/home.js";
import Join from "./pages/join.js";
import Login from "./pages/login.js";
import Mypage from "./pages/mypage.js";
import Write from "./pages/write.js";

function Body({ page, setPage, isLogin, setIsLogin }) {
  //page값에 따라 다른게 나오게 됨.
  if (page === "Home") {
    return (
    <Home setPage={setPage} />
    );
  } else if (page === "Join") {
    return (
    <Join />
    );
  } else if (page === "Login") {
    return (
      <Login setIsLogin={setIsLogin} isLogin={isLogin} setPage={setPage} />
    );
  } else if (page === "Mypage") {
    return (
    <Mypage setIsLogin={setIsLogin} setPage={setPage} />
    );
  } else if (page === "Write") {
    return (
    <Write />
    );
  }
}

export default Body;
