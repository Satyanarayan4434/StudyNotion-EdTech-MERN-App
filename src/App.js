import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import { Toaster } from "react-hot-toast";
import { ForgotPassword } from "./pages/ForgotPassword";
import { OtpVerification } from "./pages/OtpVerification";
import { UpdatePassword } from "./pages/UpdatePassword";
import { AboutUs } from "./pages/AboutUs";
import { Dashboard } from "./pages/Dashboard";


function App() {
  return (
    <div>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
      <Route path="/verify-email" element={<OtpVerification/>}></Route>
      <Route path="/update-password/:token" element={<UpdatePassword/>}></Route>
      <Route path="/about" element={<AboutUs/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
     </Routes>
     <Footer/>
     <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
