import React from "react";
import Footer from "../HeaderFooter/Footer";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

import about from "../images/about.jpg";
import hero from "../images/hero.jpg";
import cbz from "../images/cbz.png";
import server from "../images/server.png";
import subnet from "../images/subnet.png";

const Home = () => {
  const heroleft = useRef();
  const heroright = useRef();

  useGSAP(() => {
    // hero section animation
    gsap.fromTo(
      heroleft.current,
      {
        x: -1000,
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 1.2,
        autoAlpha: 1,
        ease: "power4",
        delay: 0.3,
      },
    );

    gsap.fromTo(
      heroright.current,
      {
        y: -1000,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        ease: "power4",
      },
    );
  });

  return (
    <div className="h-[80vh]  w-full overflow-y-scroll scrollbar-none bg-[#0F1720]">
      {/* Hero section */}
      <section id="home"></section>
      <div className=" w-full grid grid-cols-2 justify-between mt-20 max-lg:mt-10 max-lg:gap-5">
        {/* left section small statement */}
        <div>
          <div
            ref={heroleft}
            className="grid grid-cols-1 gap-1 h-full w-full items-center max-lg:gap-3"
          >
            <p className="font-extrabold mb-10 text-[1.5rem] p-3 w-[50%] rounded-[10px] bg-[#141F29] text-[#E7EDF3] max-lg:text-[1rem] max-lg:font-bold max-lg:w-[60%] max-lg:p-1 max-lg:mb-5">
              IT Support Specialist
            </p>
            <h1 className=" w-[70%] text-[2rem] text-[#E7EDF3] max-lg:text-[1.5rem]">
              Helping you were it counts the most.
            </h1>
            <p className="mt-5 text-[1.2rem] text-[#8695A7]  max-lg:text-[1rem] max-lg:mt-1">
              I like making people's tech problems go away. IT support is where
              I do that professionally. It's also why I keep a home lab the more
              I understand how things actually work, the better I can help when
              they don't
            </p>
          </div>
        </div>
        {/* right section my picture maybe */}
        <div ref={heroright} className="flex items-center justify-center">
          <img
            src={hero}
            alt=""
            className="h-[400px] w-[500px] rounded-[15px] max-lg:h-[250px] "
          />
        </div>
      </div>

      {/* About section */}

      <section id="about"></section>
      <div className=" .about w-full h-[70vh]  grid grid-cols-2 justify-between mt-30 max-lg:gap-3">
        {/* left About section */}
        <div>
          <img
            src={about}
            alt=""
            className="h-[400px] w-[500px] rounded-[15px]"
          />
        </div>
        {/* right About section */}
        <div>
          <h1 className="text-[2rem] text-[#E7EDF3] font-extrabold max-lg:text-[1.2rem]">
            About
          </h1>
          <p className="mt-10 text-[1.2rem] text-[#8695A7] max-lg:mt-5 max-lg:text-[1rem]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            perferendis beatae dolore sapiente nesciunt aperiam quis laudantium
            numquam velit fuga illum voluptatem facere reprehenderit illo quam
            aut ipsam. Magnam, culpa.
          </p>

          <h1 className="mt-5 text-[#E7EDF3] text-[2rem] font-extrabold max-lg:text-[1.2rem]">
            Skills
          </h1>
          <p className="mt-5 text-[#8695A7] text-[1.2rem] max-lg:text-[1rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            libero magnam cumque at ab voluptatibus ducimus obcaecati,
            architecto ut omnis aliquid. Dolorum perspiciatis porro soluta, id
            distinctio officiis eos ad!
          </p>
        </div>
      </div>

      {/* projects section */}
      <section id="projects"></section>
      <div className=" .projects min-h-[70vh] ">
        <div>
          <h1 className="text-[2rem] text-[#E7EDF3] font-extrabold mb-15 max-lg:text-[1.2rem] max-lg:mb-p">
            Projects
          </h1>
          <div className="ml-10  max-lg:ml-0">
            <div className="grid grid-cols-3 gap-2 text-[1.2rem] font-bold">
              <a
                href="https://cbz-to-pdf-conveter-serverless.vercel.app/"
                target="_blank"
                rel="noopener"
              >
                <div className="justify-center items-center cursor-pointer">
                  <img
                    src={cbz}
                    alt=""
                    className="h-[300px] w-[300px]   rounded-[10px] mb-5 hover:scale-[1.1] max-lg:h-[200px] max-lg:w-[200px] max-lg:mb-1"
                  />
                  <p className="text-[#E7EDF3] max-lg:text-[1rem] ">Cbz to Pdf converter</p>
                </div>
              </a>
              <a
                href="https://cbz-to-pdf-conveter-serverless.vercel.app/"
                target="_blank"
                rel="noopener"
              >
                <div className="justify-center items-center cursor-pointer">
                  <img
                    src={subnet}
                    alt=""
                    className="h-[300px] w-[300px]  rounded-[10px] mb-5 hover:scale-[1.1]  max-lg:h-[200px] max-lg:w-[200px]  max-lg:mb-1"
                  />
                  <p className="text-[#E7EDF3] max-lg:text-[1rem]">Subnet Caculator</p>
                </div>
              </a>
              <div>
                <img
                  src={server}
                  alt=""
                  className="h-[300px] w-[300px]  rounded-[10px] mb-5  hover:scale-[1.1]  max-lg:h-[200px] max-lg:w-[200px] max-lg:mb-1"
                />
                <p className="text-[#E7EDF3] max-lg:text-[1rem]">Windows Server 2022</p>
              </div>
              <div>
                <p className="h-[300px] w-[300px] bg-[#8695A7] rounded-[10px] mb-5  hover:scale-[1.1]  max-lg:h-[200px] max-lg:w-[200px]  max-lg:mb-1"></p>
                <p className="text-[#E7EDF3] max-lg:text-[1rem]">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Learning section */}
      <section id="learning"></section>
      <div className=".learning h-[60vh] grid grid-cols-2 justify-center items-center">
        <div className="text-[2.5rem] flex justify-center items-center text-[#E7EDF3] font-extrabold">
          <h1>Whats Next</h1>
        </div>
        <div>
          <p className="text-[#8695A7]">
            What's next I'm working toward the CCNA and using it as the backbone
            for everything else I build, including the subnet calculator above.
            I'm also looking into routes into network engineering roles abroad,
            including Germany's Ausbildung system (Fachinformatiker
            Systemintegration).
          </p>
        </div>
      </div>
      {/* contact section */}
      <section id="footer"></section>
      <Footer />
    </div>
  );
};

export default Home;
