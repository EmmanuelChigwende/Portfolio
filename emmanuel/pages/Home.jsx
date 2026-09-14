import React, { useRef } from "react";
import Footer from "../HeaderFooter/Footer";
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
        x: -100,
        autoAlpha: 0,
      },
      {
        x: 0,
        duration: 1.2,
        autoAlpha: 1,
        ease: "power4.out",
        delay: 0.3,
      }
    );

    gsap.fromTo(
      heroright.current,
      {
        y: -100,
        autoAlpha: 0,
      },
      {
        y: 0,
        duration: 2,
        autoAlpha: 1,
        ease: "power4.out",
      }
    );
  });

  return (
    <div className="w-full min-h-screen bg-[#0F1720] px-4 sm:px-8 md:px-12 lg:px-20 overflow-x-hidden">
      {/* Hero section */}
      <section id="home" className="pt-10 md:pt-16 pb-16">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Hero Statement */}
          <div ref={heroleft} className="flex flex-col justify-center order-2 md:order-1">
            <p className="font-extrabold mb-4 md:mb-6 text-sm sm:text-base md:text-lg lg:text-[1.3rem] p-2.5 sm:p-3 w-fit rounded-[10px] bg-[#141F29] text-[#E7EDF3]">
              IT Support Specialist
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#E7EDF3] leading-tight">
              Helping you where it counts the most.
            </h1>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-lg text-[#8695A7] leading-relaxed">
              I like making people's tech problems go away. IT support is where
              I do that professionally. It's also why I keep a home lab — the more
              I understand how things actually work, the better I can help when
              they don't.
            </p>
          </div>

          {/* Right Hero Image */}
          <div ref={heroright} className="flex items-center justify-center order-1 md:order-2">
            <img
              src={hero}
              alt="Hero portrait"
              className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] aspect-[4/3] object-cover rounded-[15px] shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="py-12 md:py-20 border-t border-[#141F29]">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src={about}
              alt="About illustration"
              className="w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] aspect-[4/3] object-cover rounded-[15px]"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#E7EDF3] font-extrabold">
              About
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#8695A7] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
              perferendis beatae dolore sapiente nesciunt aperiam quis laudantium
              numquam velit fuga illum voluptatem facere reprehenderit illo quam
              aut ipsam. Magnam, culpa.
            </p>

            <h2 className="mt-6 sm:mt-8 text-2xl sm:text-3xl lg:text-4xl text-[#E7EDF3] font-extrabold">
              Skills
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg text-[#8695A7] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
              libero magnam cumque at ab voluptatibus ducimus obcaecati,
              architecto ut omnis aliquid. Dolorum perspiciatis porro soluta, id
              distinctio officiis eos ad!
            </p>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="py-12 md:py-20 border-t border-[#141F29]">
        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#E7EDF3] font-extrabold mb-8 md:mb-12">
            Projects
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
            {/* Project 1 */}
            <a
              href="https://cbz-to-pdf-conveter-serverless.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center w-full max-w-[280px]"
            >
              <img
                src={cbz}
                alt="CBZ to PDF"
                className="w-full aspect-square object-cover rounded-[10px] mb-3 transition-transform duration-300 group-hover:scale-105"
              />
              <p className="text-sm sm:text-base font-bold text-[#E7EDF3] text-center">
                Cbz to Pdf converter
              </p>
            </a>

            {/* Project 2 */}
            <a
              href="https://cbz-to-pdf-conveter-serverless.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center w-full max-w-[280px]"
            >
              <img
                src={subnet}
                alt="Subnet Calculator"
                className="w-full aspect-square object-cover rounded-[10px] mb-3 transition-transform duration-300 group-hover:scale-105"
              />
              <p className="text-sm sm:text-base font-bold text-[#E7EDF3] text-center">
                Subnet Calculator
              </p>
            </a>

            {/* Project 3 */}
            <div className="group flex flex-col items-center w-full max-w-[280px] cursor-pointer">
              <img
                src={server}
                alt="Windows Server 2022"
                className="w-full aspect-square object-cover rounded-[10px] mb-3 transition-transform duration-300 group-hover:scale-105"
              />
              <p className="text-sm sm:text-base font-bold text-[#E7EDF3] text-center">
                Windows Server 2022
              </p>
            </div>

            {/* Project 4 */}
            <div className="group flex flex-col items-center w-full max-w-[280px]">
              <div className="w-full aspect-square bg-[#8695A7]/20 border border-[#8695A7]/30 rounded-[10px] mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-[#8695A7] text-xs uppercase tracking-wider font-semibold">Placeholder</span>
              </div>
              <p className="text-sm sm:text-base font-bold text-[#E7EDF3] text-center">
                Coming Soon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning section */}
      <section id="learning" className="py-12 md:py-20 border-t border-[#141F29]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          <div className="text-2xl sm:text-3xl lg:text-4xl text-[#E7EDF3] font-extrabold md:text-center">
            <h2>What's Next</h2>
          </div>
          <div>
            <p className="text-sm sm:text-base lg:text-lg text-[#8695A7] leading-relaxed">
              I'm working toward the CCNA and using it as the backbone for
              everything else I build, including the subnet calculator above.
              I'm also looking into routes into network engineering roles abroad,
              including Germany's Ausbildung system (Fachinformatiker
              Systemintegration).
            </p>
          </div>
        </div>
      </section>

      {/* Footer section */}
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
};

export default Home;