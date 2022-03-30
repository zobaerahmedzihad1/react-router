import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/About/About";
import FriendDetail from "./Components/FriendDetail/FriendDetail";
import Friends from "./Components/Friends/Friends";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/friend/:friendId" element={<FriendDetail/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
