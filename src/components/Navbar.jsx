import React, { useState } from "react";
import { Link } from "react-router-dom";
import { switchTheme } from "../app/Slices/ThemeSlices";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { theme } = useSelector((s) => s.theme);

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className="flex items-center justify-between gap-2 md:px-16 px-8 py-4 ">
        <div>
          <h1 className="font-bold text-5xl dark:text-white">MA</h1>
        </div>
        <div className="md:flex hidden gap-4 text-xl  cursor-pointer items-center">
          <Link to="#home">Home</Link>
          <Link to="#project">Project</Link>
          <Link to="#contact">Contact</Link>
          <div className="flex items-center">
            <button onClick={() => dispatch(switchTheme())}>
              {theme === "light" ? (
                <MdOutlineDarkMode size={30} />
              ) : (
                <MdDarkMode size={30} />
              )}
            </button>
          </div>
        </div>
        <div className="md:hidden cursor-pointer flex flex-row items-center gap-5">
          {open ? (
            <AiOutlineClose size={40} onClick={toggleOpen} />
          ) : (
            <AiOutlineMenu size={40} onClick={toggleOpen} />
          )}
        </div>
        {open && (
          <div className="md:hidden flex cursor-pointer  text-2xl flex-col dark:bg-zinc-800 bg-gray-600 items-center space-y-16 h-[100vh] w-full fixed top-0 right-0 text-white z-50 ">
            <AiOutlineClose
              size={40}
              onClick={toggleOpen}
              className="text-white absolute left-7 mt-5 cursor-pointer "
            />
            <div className=" flex flex-col py-20 space-y-16">
              <Link onClick={() => setOpen(false)}>Home</Link>
              <Link onClick={() => setOpen(false)}>Projects</Link>
              <Link onClick={() => setOpen(false)}>Contact</Link>
              <div onClick={toggleOpen} className="flex items-center">
                <button onClick={() => dispatch(switchTheme())}>
                  {theme === "light" ? (
                    <MdOutlineDarkMode size={30} />
                  ) : (
                    <MdDarkMode size={30} />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
