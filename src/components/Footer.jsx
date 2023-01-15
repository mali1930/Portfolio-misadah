import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 dark:text-white text-white  ">
      <h1 className="text-center font-bold text-5xl py-10  ">MA</h1>
      <div className="flex md:flex-row cursor-pointer flex-col justify-center items-center gap-12 md:gap-32 text-md ">
        <a
          href="https://docs.google.com/document/d/1Z0U5PN0fzsMtcMtMmWzTV9Bi0AXzFbod/edit#"
          target="_blank"
        >
          Resume
        </a>
        <a href="https://github.com/mali1930" target="_blank">
          Github
        </a>
        <a href="https://www.linkedin.com/in/misadahali">Linkedin</a>
      </div>

      <h1 className="text-center h-[6vh] mt-10">Misadah@2022 misadah</h1>
    </div>
  );
};

export default Footer;
