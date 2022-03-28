import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import Friends from "./Components/Friends/Friends";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <h1>React Router.</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
