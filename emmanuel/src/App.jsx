import React, { useRef } from "react";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import Home from "../pages/Home";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";


const App = () => {
  const makeItSmooth = useRef();
  gsap.registerPlugin(ScrollSmoother)

  useGSAP(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth:3,
      effects:true
    })
  },{scope:makeItSmooth});

  return (
    <div
      id="smooth-wrapper"
      ref={makeItSmooth}
      className="bg-[#0F1720] min-h-[100vh] w-full pl-50 pr-50 "
    >
        <Header id="smooth-content" />
        {/* <div className='underline w-full decoration-2 decoration-[#263340]'></div> */}
        <Home id="smooth-content" />
    </div>
  );
};

export default App;
