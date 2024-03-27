import React from "react";
import plantIcon from "../assets/plant-icon.png";

const QuizInfo = () => {
  return (
    <div className=" flex-1 pb-6 pt-6 items-center bg-sky-200">
      <ul className="flex text-sky-950 list-none font-medium">
        <li className="flex items-center">
          <img src={plantIcon} alt="Plant Icon" className="w-7 h-7 mr-1" />
          Vata: Characteristics of an individual, defined as dry, rough, cold,
          light, and clear.
        </li>
        <li className="flex items-center">
          <img src={plantIcon} alt="Plant Icon" className="w-7 h-7 mr-1" />
          Pitta: Characteristics of an individual, defined as intense, driven,
          sharp, and energetic.{" "}
        </li>
        <li className="flex items-center">
          <img src={plantIcon} alt="Plant Icon" className="w-7 h-7 mr-1" />
          Kapha: Characteristics of an individual, defined as heavy, slow,
          stable, cool, and smooth.{" "}
        </li>
      </ul>
    </div>
  );
};

export default QuizInfo;
