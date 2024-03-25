import React from "react";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import "animate.css";
import plantIcon from "../assets/plant-icon.png";

function Landingpage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={banner}
          alt="Banner"
          className="w-90 h-80 mb-8 lg:mb-0 lg:ml-20"
        />{" "}
        <div className="mt-5 lg:mr:25">
          <h1 className="font-mono font-semibold text-5xl  text-zinc-700 animate__zoomIn">
            Know who you are...
          </h1>
          <p className="  text-zinc-700 font-semibold py-6 break-normal">
            Everyone is unique and has a special blend of natural qualities that
            make us who we are. <br /> Prakriti is a Sanskrit word, derived from
            the Sanskrit word "Prakruthi," referring to the <br /> unmanifested
            cosmic energy or potential matter that, in Sankhya philosophy, is
            made up <br />
            of the three gunas.
            <br /> These three gunas are:
            <ul className="list-none ">
              <li className="flex items-center">
                <img
                  src={plantIcon}
                  alt="Plant Icon"
                  className="w-7 h-7 mr-1"
                />
                Vata: Characteristics of an individual, defined as dry, rough,
                cold, light, and clear.
              </li>
              <li className="flex items-center">
                <img
                  src={plantIcon}
                  alt="Plant Icon"
                  className="w-7 h-7 mr-1"
                />
                Pitta: Characteristics of an individual, defined as intense,
                driven, sharp, and energetic.{" "}
              </li>
              <li className="flex items-center">
                <img
                  src={plantIcon}
                  alt="Plant Icon"
                  className="w-7 h-7 mr-1"
                />
                Kapha: Characteristics of an individual, defined as heavy, slow,
                stable, cool, and smooth.{" "}
              </li>
            </ul>
            Know your type today!
          </p>
          <Link to="/quiz" className="btn btn-accent btn-wide text-zinc-700">
            Take Test
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
