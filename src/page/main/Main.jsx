import React from 'react';
import LeftSideBar from './../../components/main/bars/LeftSideBar';
import MiddleBar from './../../components/main/bars/MiddleBar';
import RightSideBar from './../../components/main/bars/RightSideBar';


const Main = () => {
  return (
    <div className='flex w-[70%] m-auto gap-8'>
      <LeftSideBar/>
      <MiddleBar/>
      <RightSideBar/>
    </div>
  );
}

export default Main;
