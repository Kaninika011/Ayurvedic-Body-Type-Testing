import React from "react";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";
import "animate.css";
import plantIcon from "../assets/plant-icon.png";

function Landingpage() {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt="Banner" className="w-90 h-80" />{" "}
        <div>
          <h1 className="text-5xl font-bold text-zinc-700 animate__zoomIn">
            Know who you are
          </h1>
          <p className=" text-zinc-700 font-semibold py-6 break-normal">
            Everyone is unique and has a special blend of natural qualities that
            make us who we are. Prakriti is a Sanskrit word, derived from the
            Sanskrit word "Prakruthi," referring to the unmanifested cosmic
            energy or potential matter that, in Sankhya philosophy, is made up
            of the three gunas. These three gunas are:
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
