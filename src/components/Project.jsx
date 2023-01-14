import React from "react";
import movie from "../assets/Filmpire.png";
import chat from "../assets/chat-app.png";
import amazon from "../assets/amazon-clone.png";
import Roll from 'react-reveal/Roll';
import Zoom from "react-reveal/Zoom";
import bird from "../assets/flappy-bird-cover.jpg"

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Filmpire Movies",
      description: "Building html css js react redux with TMBD movies API",
      img: movie,
    },
    {
      id: 2,
      title: "Amazon Clone",
      description: "Building html css js react redux with TMBD movies API",
      img: amazon,
    },
    {
      id: 3,
      title: "Chat-app",
      description: "Building html css js react redux with TMBD movies API",
      img: chat,
    },
    {
      id: 4,
      title: "Flappy Bird",
      description: "Building html css js react redux with TMBD movies API",
      img: bird,
    },
  ];
  return (
    <div className="mt-32 mb-20">
      <div className="text-center">
        <Zoom>
          <h1 className="text-3xl md:text-4xl font-bold">
            Here are my <span className="text-orange-600">Projects</span>
          </h1>
        </Zoom>
      </div>
      <div className="flex flex-col justify-center cursor-pointer shadow-slate-600 drop-shadow-xl">
        <Roll left>
          {projects.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center  justify-center mt-12 "
            >
              <img
                src={item.img}
                alt="chat"
                className="w-[100%] md:w-[70%] h-[70vh]  border-2 rounded-md "
              />
              {/* <div>
              <p>{item.title}</p>
              <p>{item.description}</p>
            </div> */}
            </div>
          ))}
        </Roll>
      </div>
    </div>
  );
};

export default Project;
