import React from "react";
import Typewriter from "typewriter-effect";
import {ImLinkedin2} from 'react-icons/im';
import {AiFillGithub,AiOutlineMail} from 'react-icons/ai';
const Root = () => {
  return (
    <div className="h-screen bg-black text-white ">
      <div className="flex justify-center items-center gap-20 pt-56 ">
        <div className=" w-96 text-center flex flex-col gap-5">
        <h1 className="text-2xl">ABHAY KUMAR SRIVASTAVA</h1>
          <div className="text-lg">
           
            <Typewriter
            
              options={{
                strings: [
                  "Welcome You...",
                  "A PROFESSIONAL WEB DEVELOPER...|",
                  "",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="flex justify-center gap-2">
           <a href="https://www.linkedin.com/in/abhay-kumar-srivastava-b260a6236/" target="_blank"><ImLinkedin2 className="text-black bg-white rounded-full w-14 h-14 p-2"/></a> 
          <a href="https://github.com/srivastavm089" target="_blank"><AiFillGithub  className="text-black bg-white rounded-full w-14 h-14 p-2 "/></a>
          <a href="mailto:example@example.com"><AiOutlineMail  className="text-black bg-white rounded-full w-14 h-14 p-2 "/></a>
          </div>
        </div>
        <div className="hidden md:flex">
          <img
            className="w-96"
            src="https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Root;
