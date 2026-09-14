import React, { useRef } from "react";
import Header from "../HeaderFooter/Header";
import Footer from "../HeaderFooter/Footer";
import Home from "../pages/Home";


const App = () => {
  return (
    <div className="bg-[#0F1720] min-h-[100vh] w-full pl-50 pr-50 max-md:pl-[40px] max-md:pr-[40px]">
      <Header />
      {/* <div className='underline w-full decoration-2 decoration-[#263340]'></div> */}
      <Home />
    </div>
  );
};

export default App;
