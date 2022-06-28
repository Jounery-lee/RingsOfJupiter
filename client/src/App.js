import "./App.css";
import Header from './component/header.js'
import Body from './component/body.js'
import Footer from './component/footer.js'
import { useState } from "react";

function App() {
  const [page, setPage] = useState("Home");
  return (
    <div className="App">
      <Header page={page} setPage={setPage} />
      <Body page={page}/>
      <Footer />
    </div>
  );
}

export default App;
