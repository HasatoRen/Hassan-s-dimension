import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am <span className="font-semibold">Hassan</span>👋 <br />
      An aspiring full stack developer from Pakistan
    </h1>
  ),
  2: (
    <InfoBox
      text="A developer passionate about learning, creating, and exploring technology."
      link="/about"
      btnText="About Me"
    />
  ),
  3: (
    <InfoBox
      text= "Every project is a new experiment, a new challenge, and something new to discover."
      link="/Projects"
      btnText="Visit My portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Always open to new ideas, interesting conversations, and creative collaborations."
      link="/Contact"
      btnText="Lets Talk"
    />
  ),
};

const Homeinfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default Homeinfo;
