import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login"
import Signup from "./components/Signup/Signup"
import Post from "./components/Post/Post"
import Profile from "./components/Profile/Profile"
import Error from "./components/Error/Error"

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route login */}
        <Route path="/" element={<Login />} />
        {/* route signup */}
        <Route path="signup" element={<Signup />} /> 
        {/* Route Post */}
        <Route path="post" element={<Post />} /> 
        {/* route Profile */}
        <Route path="profile" element={<Profile />} />
         {/*Route Error page */}
        <Route path="error" element={<Error />} /> 
      </Routes>
      
    </div>
  );
}

export default App
