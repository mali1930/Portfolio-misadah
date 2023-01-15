import React from "react";
import movie from "../assets/Filmpire.png";
import chat from "../assets/chat-app.png";
import amazon from "../assets/amazon-clone.png";

import Zoom from "react-reveal/Zoom";
import bird from "../assets/flappy-bird-cover.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Filmpire Movies",

      img: movie,
    },
    {
      id: 2,
      title: "Amazon Clone",

      img: amazon,
    },
    {
      id: 3,
      title: "Chat-app",

      img: chat,
    },
    {
      id: 4,
      title: "Flappy Bird",

      img: bird,
    },
  ];
  return (
    <div className="mt-32 mb-20">
      <div className="text-center">
        <Zoom>
          <h1 className="text-3xl md:text-4xl mb-20 font-bold">
            Here are my <span className="text-orange-600">Projects</span>
          </h1>
        </Zoom>
      </div>

      <div className="flex flex-col gap-20 justify-center cursor-pointer shadow-slate-300 drop-shadow-xl md:px-10">
        {projects.map((item) => (
          <div
            key={item.id}
            class="group relative cursor-pointer items-center justify-center overflow-hidden "
          >
            <div class="h-[80vh] w-[100%] ">
              <img class="h-full w-full   " src={item.img} alt="" />
            </div>
            <div class="absolute w-[100%] h-[100%] inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 class=" text-xl mb-3 font-bold text-white"> {item.title}</h1>

              <button class="rounded-full bg-neutral-900 py-2 px-3 fon text-sm capitalize text-white shadow shadow-black/60">
                See More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
