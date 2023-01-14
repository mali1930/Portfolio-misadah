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
              <div className=" w-full h-[100vh]  fixed top-0 left-0 right-0 bottom-0">
                {/* modal content */}
                <div className="flex  items-center justify-center h-screen  ">
                  <div className=" shadow-2xl rounded-lg flex justify-center  w-[60%] max-w-full  h-[70vh] ">
                    <div className="w-[50%]  bg-gray-200 text-black">
                      <div className="mt-10 p-4 leading-7">
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
                          <div className="flex gap-10 mt-2 ">
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
                    <div className="w-[50%] text-white relative bg-zinc-900">
                      <div className="mt-10 text-center">
                        <h1 className="text-3xl font-bold mb-2">
                          Let's have a chat!
                        </h1>
                        <p className="text-lg font-bold mb-1">
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
                            required
                            className=" bg-zinc-900 w-[100%] mb-12 text-white outline-0 border-b-4 h-[40px] transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xl mb-2 ">Message</label>
                          <textarea
                            className="outline-0 bg-zinc-900 mb-8 border-b-4 h-[100px] text-white w-[100%]"
                            type="text"
                          ></textarea>
                          <button className="bg-purple-700 py-4 px-24 cursor-pointer text-white">
                            Send it my way
                          </button>
                        </div>
                      </form>
                      <button
                        className="text-4xl absolute top-2 right-4"
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
