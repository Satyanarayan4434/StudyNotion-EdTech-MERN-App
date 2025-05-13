import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import { ForgotPassword } from "./pages/ForgotPassword";
import { OtpVerification } from "./pages/OtpVerification";
import { UpdatePassword } from "./pages/UpdatePassword";
import { AboutUs } from "./pages/AboutUs";
import { Dashboard } from "./pages/Dashboard";
import { MyProfile } from "./components/Dashboard/MyProfile";
import { InstructorDashboard } from "./components/Dashboard/InstructorDashboard";
import { AddCourse } from "./components/Dashboard/AddCourse";
import { EnrolledCourses } from "./components/Dashboard/EnrolledCourses";
import { MyCourses } from "./components/Dashboard/MyCourses";
import { PurchaseHistory } from "./components/Dashboard/PurchaseHistory";
import { Settings } from "./components/Dashboard/Settings";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotPassword" element={<ForgotPassword />}></Route>
        <Route path="/verify-email" element={<OtpVerification />}></Route>
        <Route
          path="/update-password/:token"
          element={<UpdatePassword />}
        ></Route>
        <Route path="/about" element={<AboutUs />}></Route>

        {/* Dashboard Specific Routes */}
        <Route  element={<Dashboard />}>
        {/* Default Route */}
        <Route index element={<Navigate to="/dashboard/my-profile" replace />} />

          {/* Children Routes */}
          <Route path="/dashboard/my-profile" element={<MyProfile />}/>
          <Route path="/dashboard/instructor" element={<InstructorDashboard />}/>
          <Route path="/dashboard/my-courses" element={<MyCourses />}/>
          <Route path="/dashboard/add-course" element={<AddCourse />}/>
          <Route path="/dashboard/enrolled-courses" element={<EnrolledCourses />}/>
          <Route path="/dashboard/purchase-history" element={<PurchaseHistory />}/>
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
      </Routes>
      <Footer />
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default App;
