import React from "react";

import Zoom from 'react-reveal/Zoom';
 import Fade from 'react-reveal/Fade';
const Skills = () =>{
  const skillsSet = [
    {
      id: 1,
      img: "https://logospng.org/download/html-5/logo-html-5-512.png",
    },
    {
      id: 2,
      img: "https://cdn.iconscout.com/icon/free/png-256/css-118-569410.png",
    },

    {
      id: 3,
      img: "https://clipground.com/images/react-logo-png-7.png",
    },
    {
      id: 4,
      img: "https://pluspng.com/img-png/firebase-logo-png-firebase-google-icon-512x512.png",
    },

    {
      id: 5,
      img: "https://faheemabrar.com/blog/static/e0c2e25d2918fb58b67e0b74811e9aa3/eed55/tailwind-css-logo-5AD4175897-seeklogo.com.png",
    },
    {
      id: 6,
      img: "https://www.freeiconspng.com/thumbs/github-icon/git-github-hub-icon-25.png",
    },
    {
      id: 7,
      img: "https://uploads-ssl.webflow.com/5fc786cefb470a119db187ca/5fe89c9ae084a85d91a66cc2_1280px-Stripe_Logo%2C_revised_2016.svg-p-1080.png",
    },

    {
      id: 8,
      img: "https://www.azoft.ru/wp-content/uploads/2019/03/javascript-logo.png",
    },
  ];

  return (
    <div className="mt-36 md:mb-28 mb-16">
      <Zoom>
        <h1 className="md:text-5xl text-3xl mb-10 font-bold text-center">
          Here are my <span className="text-orange-600">Skills</span>
        </h1>
      </Zoom>
      <Fade bottom big>
        <div className="flex flex-wrap justify-center gap-20 mt-16 items-center md:px-36 px-20 ">
          {skillsSet.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                className="md:w-[140px]  w-[92px] hover:scale-75 cursor-pointer  "
                alt="skills"
              />
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default Skills;
