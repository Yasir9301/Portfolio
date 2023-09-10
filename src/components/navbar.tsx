import React from "react";
import { useState } from "react";
import { Burger } from "@mantine/core";
// import Sidebar from './sidebar';
// import React from 'react'

type Props = {
  active: boolean;
  setActive: (value: any) => void;
};
// const title = active ? 'Close navigation' : 'Open navigation';
const Navbar = ({ active, setActive }: Props) => {
  return (
    <>
      <div className="w-[100vw] h-[70px] bg-[#15023a] fixed z-10 text-white mt-0">
        <div className="flex justify-center items-center h-full">
          <div>
            <Burger
              opened={active}
              onClick={() => setActive(!active)}
            />
          </div>
        
          Profile
        </div>
      </div>

      <div className="h-[70px] "></div>

      {/* <div className='w-[100vw] h-[70px] bg-black fixed z-10 text-white '>
   <div className='p-[10px] flex-row justify-center     '>
   <div>
      
   </div>
   </div>
      </div> */}
    </>
  );
};

// export default navbar

export default Navbar;
