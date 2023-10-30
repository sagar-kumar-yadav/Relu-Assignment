import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./page/auth/Login";
import Register from "./page/auth/Register";
import Protected from "./page/auth/Protected";
import Home from "./page/home/Home";


const App = () => {
  return (
    <div className="bg-[#F5F5F5] h-[100vh] fixed w-full">
      <Routes>
        {/* login and register routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* In protected route, we have our home route, it means if we not login your home page is not open*/}
        <Route path="/" element={<Protected />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
