import React from "react";
import data from "../../../data/rightSidebarData.json";

const RightSideBar = () => {
  return (
    <div className=" w-64 rounded-xl mt-10 flex-grow-[0.2] ">
      <div className="flex gap-4 p-2 rounded-lg">
        <div className="">Artist</div>
        <div className="">Photographer</div>
      </div>

      {/* <div className="flex bg-rightSideBar bg-no-repeat bg-cover bg-center bg-fixed h-32 rounded-xl mt-4 items-end"> */}
      <div className="flex  ">
        <div className="flex items-center  text-xs flex-col w-full overflow-y-scroll  h-[79vh]">
          {data.map((d, i) => {
            return (
              <div
                // className="flex bg-rightSideBar bg-no-repeat bg-cover bg-center h-28 rounded-xl mt-4 items-end w-full"
                className="bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center h-28 w-full rounded-xl items-end mt-4 flex"
                style={{ '--image-url': `url(${d.artistBackground})` }}
                key={i}
              >
                <div className="flex items-center">
                  <div className="p-4">
                    <img src={d.artistProfile} alt="" />
                  </div>
                  <div className=" text-white">
                    <p>{d.artistName}</p>
                    <p>{d.artistUserName}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
