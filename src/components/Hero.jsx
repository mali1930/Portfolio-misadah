import React from "react";
import { BsLinkedin, BsGithub, BsPaperclip } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";
const Hero = () => {
  return (
    <>
      <Zoom>
        <div className="flex flex-col  md:px-24 mt-16  mb-12 md:mb-24 ">
          <h1 className="md:text-7xl  text-6xl font-bold">
            <div className="mb-4">Hey,</div>
            <span className="text-orange-600">I'm Misadah!</span>
          </h1>
          <div className="max-w-4xl mt-4 ">
            <p className="py-2  text-xl leading-[41px] ">
              I'm a{" "}
              <span className="text-orange-600">
                Frontend Software Engineer
              </span>{" "}
              with 1 year of experience delivering
              high-impact web development services. Skilled at using programming
              languages to create outstanding designs for excellent
              user-experience. I have a solid understanding of web development
              technologies and implement user-friendly, responsive, and visually
              appealing web applications. Here is a bit more{" "}
              <span className="text-orange-600">about me....</span>
            </p>
          </div>
          <div className="flex gap-10  mt-4  ">
            <button>
              <BsLinkedin
                size={26}
                className="text-orange-600 hover:scale-[1.6]"
              />
            </button>
            <button href="https://github.com/mali1930" target="_blank">
              <BsGithub
                size={26}
                className="text-orange-600 hover:scale-[1.6]"
              />
            </button>
            <button>
              <BsPaperclip
                size={26}
                className="text-orange-600 hover:scale-[1.6]"
              />
            </button>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default Hero;
