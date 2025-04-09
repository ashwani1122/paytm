
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Send from "./pages/Send";
import Signup from "./pages/signup";
import Signin from "./pages/signin";
import Dashboard from "./pages/Dashboard";
function App() {

  return ( 
  <div className="w-full h-screen">
      <Router>
        <Routes>
          {/* <Route path="/" element={<Send />} /> */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        </Router>
        </div>
  )
}
export  default App
