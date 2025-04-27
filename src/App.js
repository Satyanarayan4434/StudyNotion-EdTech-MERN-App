import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div class="">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
