import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./../../../firebase";
import { signOut } from "firebase/auth";
import Menu from "../../../data/menuData.json";

const LeftSideBar = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className=" w-64 mt-10 flex-grow-[0.2] bg-[#FFFFFF] flex flex-col h-[35rem] justify-between rounded-xl">
      <div className="">
        {Menu.map((m) => {
          return (
            <div className="">
              <div className="flex items-center pt-4 pl-4">
                <div className=" ">
                  <img src={m.menuLogo} alt="" />
                </div>
                <div className="">
                  <span className="pl-4">{m.menuName}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="p-4">
        <img
          src="/src/assets/profile_pic/logout.png"
          alt=""
          className="inline cursor-pointer"
          onClick={handleLogout}
        />
        <span className="pl-4 text-[#88C2BB]">Log Out</span>
      </div>
    </div>
  );
};

export default LeftSideBar;
