import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Register from './pages/Register'
import NotFound from './pages/NotFound'
import Success from './pages/Success'

import Menu from "./components/Menu";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path='/success' element={<Success />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
      <svg className="waves-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#cce9ff"
          fillOpacity="1"
          d="M0,128L24,122.7C48,117,96,107,144,106.7C192,107,240,117,288,138.7C336,160,384,192,432,218.7C480,245,528,267,576,272C624,277,672,267,720,261.3C768,256,816,256,864,234.7C912,213,960,171,1008,165.3C1056,160,1104,192,1152,186.7C1200,181,1248,139,1296,138.7C1344,139,1392,181,1416,202.7L1440,224L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
        ></path>
      </svg>
      <div className="waves-box">

      </div>
    </BrowserRouter>
  );
}

export default App;
