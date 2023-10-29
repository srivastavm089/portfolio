import React from "react";

const ProjectCard = ({ image, title, list, tech }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <img src={image} alt="logo" className="h-60 w-12/12" />
      <h1 className="text-2xl font-bold">{title}</h1>
      <ul className="list-disc">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="flex gap-2">
        <a className="border p-2 rounded hover:bg-white hover:text-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
          GitHub
        </a>
        <a className="border p-2 rounded hover:bg-white hover:text-black transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
          Live
        </a>
      </div>
      <div className="flex justify-center gap-2 bg-gray-700 w-full p-4">
        {tech.map((item) => (
          <span className=" text-black bg-white rounded-full p-2">{item}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
