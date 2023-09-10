import React from "react";

type Props = {
  active: boolean;
};

const Sidebar = ({ active }: Props) => {
  return (
    <>
      <div
        className={`${
          active
            ? "h-[100vh] w-[20em] bg-[#15023a] z-20 fixed text-white transition-all ease-out delay-1000 "
            : "mr-[10%] hidden transition-all ease-in"
        }`}
      >
        
      </div>
    </>
  );
};

export default Sidebar;
