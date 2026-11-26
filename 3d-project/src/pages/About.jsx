import React from "react";
import { div } from "three/src/nodes/math/OperatorNode.js";

const About = () => {
  return (
    <section className="max-container ">
      <h1 className="head-text">
        Hello!, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Hassan
        </span>
      </h1>

      <div>
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          A developer from Pakistan, specializing in frontend development,
          driven by hands-on learning, creative experimentation, and a passion
          for turning ideas into interactive digital experiences.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12"></div>
      </div>
    </section>
  );
};

export default About;
