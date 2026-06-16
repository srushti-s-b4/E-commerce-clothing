import React from "react";
import hand_icon from "../Ecommerce_Assets (1)/Assets/Frontend_Assets/hand_icon.png";
import arrow_icon from "../Ecommerce_Assets (1)/Assets/Frontend_Assets/arrow.png";
import hero_image from "../Ecommerce_Assets (1)/Assets/Frontend_Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] bg-[#f8f8f8] flex items-center justify-around px-20">
      <div className="flex flex-col justify-center items-start gap-4">
        <h1 className="text-lg font-semibold tracking-wide text-gray-800">
          NEW ARRIVALS ONLY
        </h1>

        <div className="flex items-center gap-3">
          <p className="text-6xl font-bold text-black">new</p>
          <img src={hand_icon} alt="hand" className="w-14 h-14" />
        </div>

        <p className="text-6xl font-bold text-black">
          Collections
        </p>

        <p className="text-6xl font-bold text-black">
          for everyone
        </p>

        <button className="flex items-center gap-4 bg-red-800 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-red-900 transition">
          Latest Collections
          <img src={arrow_icon} alt="arrow" className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={hero_image}
          alt="hero"
          className="w-[450px]"
        />
      </div>
    </div>
  );
};

export default Hero;