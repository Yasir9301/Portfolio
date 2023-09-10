import React from "react";

type Props = {
  active: boolean;
};

const One = (active: Props) => {
  // const spanStyle = {
  //   width: "90%",
  //   height: "95%",
  //   backgroundColor: "bg-red-300",
  //   borderRadius: "9999px",
  //   justifyContent: "center",
  //   marginLeft: active ? "2em" : "0", // Increase left margin if active is true
  // };

  return (
    <>
      <div
        className=" w-[100vw] bg-white relative flex "
        style={{ height: "calc(100vh - 70px)" }}
      >
        {/* <div className="flex"> */}
        <div
          className="  w-[50%]  flex justify-center items-end overflow-hidden "
          style={{ height: "calc(100vh - 70px)" }}
        >
          <span
            className={`w-[90%] h-[95%] bg-red-300 rounded-r-full ${
              active ? "ml-[0em]" : "ml-[0em]"
            }`}
          >
            {/* <img src={Pro} alt="" /> */}

            <h1 className={`text-center text-slate-950 text-5xl mr-[3em]  ${
              active ? "ml-[0em]" : "ml-[0em]"
            }`}>
              SYED ALI YASIR
            </h1>
            <p className="text-center  text-slate-950 text-xl">
              (Software Engineer)
            </p>
          </span>

          {/* </div> */}
        </div>

        <div className=" w-[50%] justify-center"></div>
      </div>
    </>
  );
};
export default One;
