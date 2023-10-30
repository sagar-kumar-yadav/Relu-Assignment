import React, { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import data from "../../../data/data.json";

const MiddleBar = () => {
  return (
    <div className="w-[620px] flex-grow-[0.6] overflow-y-scroll h-[79vh] mt-10 flex flex-col gap-4 scrollbar-hide">
      {data &&
        data.map((d, i) => {
          return (
            <div
              className="flex  bg-[#FFFFFF] flex-col p-5 rounded-xl"
              key={i}
            >
              {/* name and more icon ----------------------------- */}
              <div className="flex items-center justify-between">
                <div className="flex ">
                  <div className="">
                    <img src={d.profileIcon} alt="" />
                  </div>
                  <div className="pl-4">
                    <span className="block">{d.name}</span>
                    <span className="">{d.userName}</span>
                  </div>
                </div>

                <div className="">
                  <MoreVertIcon />
                </div>
              </div>

              <div className="py-4">
                <p className=" text-xs">
                  {d.paragraph}
                  <span className="text-[#FF5E8A]"> Read More</span>
                </p>
              </div>

              <div className="">
                <img src={d.image} alt="" />
              </div>

              {/* like comment share container */}
              <div className="flex p-4 bg-[#FFFFFF] w-full mt-[2px] rounded-xl">
                <div className="flex">
                  <div className="">
                    <img src="/src/assets/profile_pic/heart.png" alt="like" />
                  </div>
                  <span className="pl-2 pr-2">9.8k</span>
                </div>

                <div className="flex">
                  <div className="">
                    <img
                      src="/src/assets/profile_pic/comment.png"
                      alt="comment"
                    />
                  </div>
                  <span className="pl-2 pr-2">8.6k</span>
                </div>

                <div className="flex">
                  <div className="">
                    <img src="/src/assets/profile_pic/share.png" alt="share" />
                  </div>
                  <span className="pl-2">7.2k</span>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default MiddleBar;
