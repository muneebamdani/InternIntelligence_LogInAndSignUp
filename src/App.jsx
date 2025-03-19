import React from "react";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import "./css/style.css";
import "./css/responsive.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>

  );
};

export default App;
