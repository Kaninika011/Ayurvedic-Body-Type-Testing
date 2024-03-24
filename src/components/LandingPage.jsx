import React from "react";
import banner from "../assets/banner.png";
import { Link } from "react-router-dom";

function Landingpage() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt="Banner" className="w-90 h-80" />{" "}
        <div>
          <h1 className="text-5xl font-bold">Hello</h1>
          <p className="py-6">Welcome to Ayurveda body testing loremIpsum.</p>
          <Link to="/quiz" className="btn btn-outline btn-wide btn-accent">
            Take Test
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
