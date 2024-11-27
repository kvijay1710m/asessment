import React from 'react'
import Quickaction from '../../Components/Quickaction';
import MyOrder from '../../Components/MyOrder';

const MainContent = () => {
  return (
    <div className="mt-[110px] ml-[20px] md:ml-[-220px]">
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Quickaction />
        </div>
        <div className="flex flex-col space-y-6">
          <MyOrder />
          <MyOrder />
        </div>
      </div>
    </div>
  );
}

export default MainContent
