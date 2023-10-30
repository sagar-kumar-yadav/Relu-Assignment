import React, { useState } from "react";
import toast from "react-hot-toast";
import { NavLink, useNavigate } from "react-router-dom";
import "./login.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      toast.success("account created successfully")
      alert("account created successfully")
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="inner mt-20">
        <form onSubmit={handleSubmit}>
          <h3>Registration Form</h3>

          <div className="form-wrapper">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control outline-none"
              required
            />
            <i className="zmdi zmdi-email" />
          </div>

          <div className="form-wrapper">
            <i className="zmdi zmdi-caret-down" style={{ fontSize: 17 }} />
          </div>
          <div className="form-wrapper">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control outline-none"
              required
            />
            <i className="zmdi zmdi-lock" />
          </div>

          <div className=" flex flex-col gap-2 items-center justify-center">
            <button className="reg-btn">
              Register
              <i className="zmdi zmdi-arrow-right" />
            </button>

            <NavLink
              className="reg-btn pt-[13px] pb-[11px] pl-[60px] pr-[67px] bg-green-700"
              to="/login"
            >
              Go To Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
