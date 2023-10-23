import React from "react";

const About = () => {
  return (
    <div className="bg-black">
      <h1 className="text-white text-center text-7xl pt-12 ">About</h1>
      <div className=" flex flex-col justify-center gap-10 items-center mt-12 md:flex-row">
     
      <div className="w-96">
        <p className="text-white">
          I am an aspiring frontend developer with a strong passion for creating
          user-friendly and visually appealing websites. I have been actively
          engaged in self-directed learning and skill-building to kickstart my
          career in web development. My journey includes gaining proficiency in
          essential web technologies such as HTML, CSS, and JavaScript. I have
          also delved into modern frontend frameworks like React and state
          management with Redux. To further enhance my skills, I've been
          exploring backend technologies like Firebase and have worked on
          various projects that involve integrating these technologies to build
          full-stack applications. Additionally, I've dabbled in web libraries
          to streamline development and improve user experience. My commitment
          to growth extends beyond coding; I actively seek out opportunities for
          learning and innovation. I've participated in online courses,
          workshops, and even hackathons to expand my knowledge and collaborate
          with other like-minded developers. My ability to work harmoniously
          with designers has allowed me to translate design concepts into
          functional web interfaces effectively. As a self-driven learner, I am
          constantly honing my skills in responsive web design, performance
          optimization, and web accessibility. I understand the importance of
          version control with Git and GitHub and am diligent in maintaining
          clean, well-documented code. Although I'm currently honing my skills
          independently, I am eager to contribute my frontend development
          expertise to real-world projects and continue my journey towards
          becoming a professional frontend developer. My goal is to leverage my
          knowledge and enthusiasm to build engaging and impactful websites that
          cater to user needs and client objectives
        </p>
      </div>
      <div>
        <img className="w-96" src="https://zippy-custard-299680.netlify.app/static/media/IMG_20191126_222305.6a7fc6cbc4b08a75e119.jpg" alt="image" />
      </div>
    </div>
    </div>
  );
};

export default About;
