import React, { useState } from "react";
import { AiTwotoneMail } from "react-icons/ai";
import Zoom from "react-reveal/Zoom";

const Modal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="mb-7 relative left-3">
        <button
          className="border-2 dark:border-white dark:bg-white  border-black rounded-full py-3 hover:bg-red-700 px-3"
          onClick={toggleModal}
        >
          <AiTwotoneMail size={50} className="dark:bg-white text-black " />
        </button>

        {modal && (
          //{/* modal */}
          <div>
            {/* overlay */}
            <Zoom>
              <div className=" w-full    ">
                {/* modal content */}
                <div className="flex  items-center justify-center h-screen  ">
                  <div className=" shadow-xl  rounded-lg flex justify-center  w-[90%] max-w-full   ">
                    <div className=" w-[100%] md:block hidden  bg-gray-200 text-black">
                      <div className="mt-20 p-4 leading-7">
                        <h1 className="text-3xl font-bold text-center mb-2">
                          Here's a bit about me.
                        </h1>
                        <p className="text-center font-bold mb-2">
                          Frontend Software Engineer.
                        </p>
                        <div>
                          <p className="text-md mb-2 leading-10">
                            I'm a Frontend Software Engineer with 1 year of
                            experience delivering high-impact web development
                            services. I have a solid understanding of web
                            development technologies and implement
                            user-friendly, responsive, and visually appealing
                            web applications. I currently build personal
                            projects and solve engineering problems every day
                            with HTML5, CSS3, JavaScript, and React.
                          </p>
                          <div className="flex flex-wrap gap-10 mt-4 ">
                            <img
                              src="https://logospng.org/download/html-5/logo-html-5-512.png"
                              className="w-[60px]"
                              alt="html"
                            />
                            <img
                              src="https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png"
                              alt="css"
                              className="w-[60px]"
                            />
                            <img
                              src="https://www.computerhope.com/jargon/j/javascript.png"
                              alt="javascript"
                              className="w-[60px]"
                            />
                            <img
                              src="https://clipground.com/images/react-logo-png-7.png"
                              className="w-[60px]"
                              alt="React"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] text-white relative bg-zinc-900">
                      <div className="mt-12 text-center px-2">
                        <h1 className="md:text-3xl text-xl font-bold mb-2">
                          Let's have a chat!
                        </h1>
                        <p className="md:text-lg text-md font-bold mb-1">
                          I'm currently open to new opportunities.
                        </p>
                      </div>
                      <form className="p-10">
                        <div>
                          <label className="block text-xl">Name</label>
                          <input
                            type="text"
                            required
                            className=" bg-zinc-900 w-[100%] mb-12 text-white outline-0 border-b-4 h-[40px] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xl ">Email</label>
                          <input
                            type="email"
                            requiredg
                            className=" bg-zinc-900 w-[100%] mb-12 text-white outline-0 border-b-4 h-[40px] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xl mb-2 ">Message</label>
                          <textarea
                            className="outline-0 bg-zinc-900 mb-8 border-b-4 h-[100px] text-white w-[100%]"
                            type="text"
                          ></textarea>
                          <button className="bg-purple-700 py-2 px-6 cursor-pointer text-white">
                            Send it my way
                          </button>
                        </div>
                      </form>
                      <button
                        className="text-4xl absolute top-6 right-4"
                        onClick={toggleModal}
                      >
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </div>
        )}

        <div onClick={toggleModal}></div>
      </div>
    </>
  );
};

export default Modal;
