import React from "react";

const Skills = () => {
  return (
    <div className="bg-black flex flex-center text-white flex-col justify-center items-center ">
     <div className="mt-12 border-b-2  text-center"><h1 className="text-5xl">Skills</h1></div>
      <div className="mt-12" >
      
        <p className="whitespace-pre-wrap w-96 text-xl">
          I love to learn new things and experiment with new technologies. These 
          are some of the major languages, technologies, tools and platforms I
          have worked with:
        </p>
      </div>
     
      <div className="flex flex-col gap-10 items-center">
        <div className="text-center mt-2">
          <h1 className="text-xl">Language & Databases</h1>
        </div>
        <div className="flex gap-2">
          <img
            src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/java.png"
            alt="logo"
          className="w-20 hover:border"
          />
          <img
            src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/js.png"
            alt="logo"
            className="w-20 hover:border"
          />
          <img
          className="w-20 hover:border"
            src="	https://www.pngall.com/wp-content/uploads/13/Mongodb-Transparent.png"
            alt="logo"
          />
        </div>
        <div className="flex justify-center">
          <h1 className="text-xl">Frameworks & Technologies</h1>
        </div>
        <div className="flex ga-2">
          <img className="w-20 hover:border" src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/react.png" alt="logo" />
          <img className="w-20 hover:border" src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/nodejs.png" alt="logo" />
          <img className="w-20 hover:border" src="https://img.stackshare.io/service/7374/react-redux.png" alt="logo" />
          <img className="w-20 hover:border" src="https://res.cloudinary.com/practicaldev/image/fetch/s--ktYESCeQ--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/dxy1c2bvl6odeo52dodk.jpg" alt="logo" />
        </div>
        <div>
          <h1 className="text-2xl">Tools & Platforms</h1>
        </div>
        <div>
          <img className="w-20 hover:border" src="https://dev-portfolio-mayankagarwal09.vercel.app/images/skills/git.png" alt="logo" />
        </div>
      </div>
      </div>
 
  );
};

export default Skills;
