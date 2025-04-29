import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar/Navbar";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div class="">
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
     </Routes>
     <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
