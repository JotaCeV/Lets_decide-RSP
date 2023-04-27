import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Rules from "./components/rules-page/rules";
import Home from "./components/home/Home";
import GamePage from "./components/game-page";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
