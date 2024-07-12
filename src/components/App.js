import React from "react";
import "./../styles/App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Users from "./Users";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/:id" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
