import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home"

function App() {
  return (
    <div class="">
     <Routes>
      <Route path="/" element={<Home/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
