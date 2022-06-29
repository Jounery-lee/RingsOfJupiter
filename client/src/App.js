import "./App.css";
import Header from './component/header.js'
import Body from './component/body.js'
import Footer from './component/footer.js'
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div className="App">
      <Header page={page} setPage={setPage} isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Body page={page} isLogin={isLogin} setIsLogin={setIsLogin}/>
      <Footer />
    </div>
  );
}

export default App;
