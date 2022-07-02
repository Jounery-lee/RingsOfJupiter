import "./App.css";
import Header from './component/header.js'
import Body from './component/body.js'
import Footer from './component/footer.js'
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  // page의 값에 따라 Body의 내용 변화. 기본 Home에서 Mypage, login, join 등
  const [isLogin, setIsLogin] = useState(false);
  // 로그인 되었는지 아닌지 저장하는 State 나중에 세션으로 교체 해야함.
  return (
    <div className="App">
      <Header page={page} setPage={setPage} isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Body page={page} isLogin={isLogin} setIsLogin={setIsLogin} setPage={setPage} />
      <Footer />
    </div>
  );
}

export default App;
