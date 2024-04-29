"use client";
import { Component } from "@/components/component/NavBar";

import Image from "next/image";
import Second from "./components/Second";

export default function Home() {
  return (
    <main className="w-full">
      <Component />
      <div className="bg-main ">
        <div className="bg-opacity-50 bg-black text-center flex flex-col items-center">
          <div className="flex flex-col flex-grow justify-around items-center p-8 md:p-16 lg:p-36 gap-5">
            <div>
              <h1 className=" text-4xl md:text5xl lg:text-8xl text-white ">
                Hamara Gharr
              </h1>
            </div>
            <div>
              <p className="text-white">
                Every Rich and Powerful Personality Uses Vastu For Their
                Premises Globally
              </p>
            </div>
            <div>
              <button className="bg-orange-200 px-8 py-4 uppercase font-semibold text-amber-700">
                Discover more
              </button>
            </div>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap flex-grow-0 bg-white  px-16 py-12 border-b-4 border-amber-800 w-full md:w-11/12 gap-5">
            <div className="flex-grow w-full md:w-fit flex gap-5  md:flex-col lg:flex-row items-center md:justify-center">
              <img className="h-12 aspect-auto w-fit" src="/budha.png" />
              <p className="md:text-lg">
                Elevate Your Home,
                <br className="hidden md:block" />
                Elevate Your Life
              </p>
            </div>
            <div className="flex-grow flex gap-5 md:border-dashed md:border-2 md:border-x-2 md:border-yellow-500 md:border-y-0  md:flex-col lg:flex-row items-center md:justify-center">
              <img className="h-12 aspect-auto w-fit" src="/ele.png" />
              <p className="md:text-lg">
                Where Abundance Meets
                <br className="hidden md:block" />
                Vastu
              </p>
            </div>
            <div className="flex-grow flex gap-5 md:flex-col lg:flex-row items-center md:justify-center">
              <img className="h-12 aspect-auto w-fit" src="/om.png" />
              <p className="md:text-lg">
                Bringing Positivity: Your
                <br className="hidden md:block" />
                Path To Prosperity
              </p>
            </div>
          </div>
        </div>
      </div>
      <Second/>
    </main>
  );
}
