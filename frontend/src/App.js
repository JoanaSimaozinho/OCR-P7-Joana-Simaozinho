import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Error, Login, Post, Profile, Signup, PostList } from "./components"

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
        {/* Route PostList */}
        <Route path="postlist" element={<PostList />} /> 
      </Routes>
      
    </div>
  );
}

export default App
