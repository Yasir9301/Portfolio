import React from "react";
import "./App.css";
import One from "./components/one/one";
import Two from "./components/two/two";
import Three from "./components/three/three";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

const App = () => { 
  const [active, setActive] = React.useState<boolean>(false);

  return (
    <>
      <div className="">
        <div>
          <Navbar active={active} setActive={setActive} />
          <Sidebar active={active} />
        </div>
        <div>
          <One active={active} />
          <Two />
          <Three />
        </div>{" "}
        {/* React. */}
      </div>
    </>
  );
};

export default App;
