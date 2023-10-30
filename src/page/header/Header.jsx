import React from "react";

const Header = () => {
  return (
    <div className="w-[70%] m-auto">
      <div className="flex items-center gap-8 ">
        {/* logo ------------------------------------------------------------- */}
        <div className="bg-[#FFFFFF]  w-64 h-16 rounded-xl mt-10 flex-grow-[0.2] flex items-center pl-4">
          <span className="text-black font-Mongolian-Baiti text-4xl pt-4">LOGO</span>
        </div>

        {/* search and  filter here -------------------------------------*/}
        <div className="flex bg-[#FFFFFF] w-[620px] h-16 rounded-xl mt-10 flex-grow-[0.6] items-center justify-between">
          <div className=" min-w-fit">
            <img
              src="/src/assets/profile_pic/Component_32.png"
              alt=""
              className="inline pl-4 pr-2"
            />
            <input
              type="text"
              placeholder="search here"
              className=" outline-none"
            />
          </div>

          <div className=" min-w-fit">
            <img
              src="/src/assets/profile_pic/Component39.png"
              alt=""
              className="inline px-4"
            />
            <span className="pr-4">filters</span>
          </div>
        </div>

        {/* become a seller button ----------------------------------------------------------------------- */}
        <div className=" bg-[#88C2BB] w-64 h-16 rounded-xl mt-10 flex-grow-[0.2] flex items-center justify-center min-w-fit">
          <button className=" text-[white]">Become a Seller</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
