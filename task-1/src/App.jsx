import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User1 from "./components/User1";
import User2 from "./components/User2";
import Navbar from "./components/Navbar";
import Users from "./components/Users";
import "./App.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Users />}>
            <Route index element={<User1 />} />
            <Route path="/user-1" element={<User1 />} />
            <Route path="/user-2" element={<User2 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
