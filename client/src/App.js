import "./App.css";
import Header from './component/header.js'
import Body from './component/body.js'
import { useState } from "react";

function App() {
  const [page, setPage] = useState(true);
  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      <Body page={page}/>
      <footer>아래푸터</footer>
    </div>
  );
}

export default App;
