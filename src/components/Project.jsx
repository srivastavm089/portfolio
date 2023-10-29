import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="min-h-fit bg-black text-white">
      <div className="flex justify-center">
        {" "}
        <h1 className="text-6xl border-b-2 pb-2">Project</h1>
      </div>
      <div className="grid grid-cols-3 justify-center gap-2  mt-10">
        <ProjectCard
          image="https://abhaykumarsrivastava.netlify.app/static/media/crypto.cb0f463a0ab7dd11b65f.png"
          title="Crypto"
          list={[
            "A crypto clone app with dyanmic data",
            "Fully Responsive and get instant share prices",
          ]}
          tech={["React", "Chakra Ui", "Javascript"]}
        />
        <ProjectCard
          image="https://abhaykumarsrivastava.netlify.app/static/media/netflix.856348a0636ec5c5ad3e.png"
          title="Netflix Clone"
          list={[
            "Netflix clone app with dyanmic api data",
            "A clear layout with sliding featres and paginations",
          ]}
          tech={["React","bootstrap", "javascript", "tailwind"]}
        />
        <ProjectCard
          image="https://abhaykumarsrivastava.netlify.app/static/media/quiz.1f442d8086d84fcea1ab.png"
          title="Quiz App"
          list={[
            "Interactive Quiz Application with JavaScript",
            "Creating a Dynamic JavaScript Quiz Application",
          ]}
          tech={["Html", "Css", "Vanila Javascript"]}
        />
        <ProjectCard
          image="https://abhaykumarsrivastava.netlify.app/static/media/fitness.36dd554a631a14fa6820.png"
          title="Fitness App"
          list={[
            "A Fitness website with 3D Look",
            "Fully Responsive for moble and computers",
          ]}
          tech={["React", "Tailwind", "Javascript"]}
        />
        <ProjectCard
          image="https://abhaykumarsrivastava.netlify.app/static/media/guessing.b4410c653fbb9650c12f.png"
          title="Guessing Number"
          list={[
            "Interactive Number Guessing Game in JavaScript",
            "Guess the Number: A Fun JavaScript Game",
          ]}
          tech={["Html", "Css", "Javascript"]}
        />
        <ProjectCard
          image="https://abhaykumarsrivastava.netlify.app/static/media/music.29f118673117a48b8c13.png"
          title="Basic Media Player"
          list={[
            "Building a Basic Music Player with JavaScrip",
            "a Minimalist JavaScript Music Player",
          ]}
          tech={["Html", "Css", "Javascript"]}
        />
      </div>
    </div>
  );
};

export default Project;
