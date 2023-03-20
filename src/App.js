import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import LoginStu from "./components/LoginStu";
import LoginTea from "./components/LoginTea";
import LoginDash from "./components/LoginDash";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/loginstudent" element={<LoginStu />} />
        <Route path="/loginteacher" element={<LoginTea />} />
        <Route path="/studashboard" element={<LoginDash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
