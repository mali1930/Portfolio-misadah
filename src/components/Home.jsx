import React from "react";
import Hero from "./Hero";
import Modal from "./Modal";
import Project from "./Project";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <div className="md:px-14 flex flex-col gap-20 md:gap-1 px-6  md:mt-20 mt-10">
        <Hero />

        <Skills />

        <Project />

        <div className="fixed right-0 bottom-0 px-10">
          <Modal />
        </div>
      </div>
    </>
  );
};

export default Home;
