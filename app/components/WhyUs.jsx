import React from "react";

const WhyUs = () => {
  return (
    <div className="group relative z-0 flex flex-col py-20 items-center shadow-lg duration-500 ease-in-out transition-all gap-8  bg-white px-5 lg:">
      <div className="w-16 h-16 aspect-square bg-amber-300 p-2">
        <img src="/chair.png" />
      </div>
      <div>
        <h2 className="text-xl font-bold">Positive Energy Flow</h2>
      </div>
      <div>
        <p className="text-center opacity-70">
          Vastu principles aim to ensure a smooth and positive flow of energy
          throughout the home.
        </p>
      </div>

      <div className="absolute top-0 z-10 hidden group-hover:flex flex-col justify-center items-center bg-vastu bg-center bg-no-repeat bg-cover w-full h-full duration-500 ease-in-out transition-all ">
        <div className="bg-black bg-opacity-40 h-full w-full absolute top-0 left-0 z-0"></div>
        <div className="flex flex-col text-white justify-center items-center z-10 px-5 gap-5">
          <h2 className="font-bold">Positive Energy Flow</h2>
          <p>
            Vastu principles aim to ensure a smooth and positive flow of energy
            throughout the home.
          </p>
          <button className="bg-orange-200 px-6 py-2 text-sm uppercase font-semibold text-amber-700">
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;