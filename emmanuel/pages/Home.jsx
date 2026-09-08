import React from "react";

const Home = () => {
  return (
    <div className="h-3/4  w-full overflow-y-scroll scrollbar-none bg-[#0F1720]">
      {/* Hero section */}
      <div className=" w-full grid grid-cols-2 justify-between mt-20 ">
        {/* left section small statement */}
        <div>
          <div className="grid grid-cols-1 gap-1 h-full w-full items-center">
            <p className="font-extrabold mb-10 text-[1.5rem] text-[#E7EDF3]">
              IT Support Specialist
            </p>
            <h1 className=" w-[70%] text-[2rem] text-[#E7EDF3]">
              Helping you were it counts the most.
            </h1>
            <p className="mt-5 text-[1.2rem] text-[#8695A7]">
              I like making people's tech problems go away. IT support is where
              I do that professionally. It's also why I keep a home lab — the
              more I understand how things actually work, the better I can help
              when they don't
            </p>
          </div>
        </div>
        {/* right section my picture maybe */}
        <div>
          <h1>place holder 2</h1>
        </div>
      </div>

      {/* About section */}

      <div className=" w-full grid grid-cols-2 justify-between mt-20">
        {/* left About section */}
        <div>
          <h1 className="text-[2rem] text-[#E7EDF3] font-extrabold">
            About
          </h1>
        </div>
        {/* right About section */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
