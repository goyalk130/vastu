"use client";
import { Component } from "@/components/component/NavBar";

import Image from "next/image";
import Second from "./components/Second";
import WhyUs from "./components/WhyUs";
import Step from "./components/Step";
import Footer from "./components/Footer";
import Buy from "./components/Buy";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import CartUi from "./components/CartUi";
import { BULL_FRAME, HORSES, Home_Vastu_Kit } from "../lib/Constant/constant";
const { createContext } = require("react");

export const productcon = createContext();

export default function Home() {
  const [state, setstate] = useState([
    {
      name: Home_Vastu_Kit,
      num: 0,
      price: 100,
    },
    {
      name: BULL_FRAME,
      num: 0,
      price: 200,
    },
    {
      name: HORSES,
      num: 0,
      price: 300,
    },
  ]
  );
  const [opencart, setopencart] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    console.log(state);
    try {
      if (typeof window !== "undefined") {
      
        localStorage.setItem("cart", JSON.stringify(state));
      }
    } catch (error) {
      console.error("Error while setting token in localStorage:", error);
    }
  }, [state]);

  return (
    <productcon.Provider value={state}>
      <main className="w-full overflow-x-hidden relative">
        <Component setopencart={setopencart} />
        <div className="bg-main mt-20 md:mt-10" data-aos="zoom-in-down">
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
        <Second />
        <div className="flex flex-col items-center mt-20 md:mt-10 gap-3">
          <h1 className="text-4xl ">Our Products</h1>
          <p className=" mx-10 md:mx-32 lg:mx-60 opacity-60">
            We gather to make our commitment to become free from suffering, help
            people with their spiritual growth and provide a safe and friendly
            space for nurturing holistic well-being.
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap flex-grow-0 bg-white gap-10 md:gap-0  py-12  w-full md:full px-10 ">
          <div className="flex-grow    flex gap-5 flex-col sm:flex-row  md:flex-col md:w-1/3   items-center  ">
            <img
              className=" aspect-auto  object-cover h-48 lg:h-60"
              src="/kit.jpg"
            />
            <div className="flex flex-col items-center md:px-8 lg:px-20 gap-5">
              <p className="md:text-lg">{Home_Vastu_Kit}</p>
              <p>
                Unleash the ancient science of Vastu in your life and invite
                prosperity, health, and harmony with our meticulously crafted
                Vastu booklet. As an embodiment of cosmic energies, this booklet
                is designed to transform your space into a vortex of positivity,
                allowing you to harness the limitless potential of your
                surroundings.
              </p>
            </div>

            <div>
              <button
                className="bg-green-400 px-3 py-2"
                onClick={() => {
                  console.log(state);
                  setstate((data) => {
                    console.log(data);
                    let newdata = data.map((item) => {
                      if (item.name == Home_Vastu_Kit) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex-grow flex gap-10 md:border-solid border-opacity-10  md:border-2 md:border-x-2 md:border-black md:border-y-0  flex-col sm:flex-row md:flex-col items-center  md:w-1/3 ">
            <img
              className=" aspect-auto object-cover h-48 lg:h-60"
              src="/bull.png"
            />
            <div className="flex flex-col items-center md:px-8 lg:px-20 gap-5">
              <p className="md:text-lg">{BULL_FRAME}​</p>
              <p>
                As per Vastu, placing a picture of a running bull in the house
                can have many benefits, including maintaining peace and
                happiness in the family, preventing unnecessary arguments and
                grudges between family members, and depicting progress in life.
                It is believed to help eliminate mental stress, financial
                problems, and ill health.
              </p>
            </div>
            <div>
              <button
                className="bg-green-400 px-3 py-2"
                onClick={() => {
                  setstate((data) => {
                    let newdata = data.map((item) => {
                      if (item.name == BULL_FRAME) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
          <div className="flex-grow flex gap-5 flex-col sm:flex-row md:flex-col  items-center  md:w-1/3 ">
            <img
              className=" aspect-auto object-cover h-48 lg:h-60"
              src="/horse.png"
            />
            <div className="flex flex-col items-center md:px-8 lg:px-20 gap-5">
              <p className="md:text-lg">{HORSES}</p>
              <p className="">
                7 horses represent success and power; thus, this painting brings
                energy, success in one’s life, wins in their profession,
                strength, and prosperity. The picture of seven horses brings
                positivity to a person’s life and removes negative energy. It
                forms a balance of power in one’s house, and the seven horses
                represent progress and success.
              </p>
            </div>
            <div>
              <button
                className="bg-green-400 px-3 py-2"
                onClick={() => {
                  setstate((data) => {
                    let newdata = data.map((item) => {
                      if (item?.name == HORSES) {
                        item.num += 1;
                      }
                      return item;
                    });
                    return newdata;
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-gray-200 flex flex-col">
          <div className="text-center text-5xl font-semibold pt-10">
            Why Vastu?
          </div>
          <div className="text-center opacity-70 pt-2 pb-10">
            Few reasons why Vastu really matters!
          </div>
          <div className="grid  sm:grid-cols-2 md:grid-cols-3 gap-10 lg:grid-cols-4	px-10  lg:px-20  py-10 bg-gray-200">
            <WhyUs />
            <WhyUs />
            <WhyUs />
            <WhyUs />
            <WhyUs />
            <WhyUs />
            <WhyUs />
            <WhyUs />
          </div>
        </div>

        <div className="bg-gray-100 py-20 px-5 md:px-20 flex gap-8 flex-col">
          <div className="font-bold text-4xl">How it Works</div>
          <div className="w-full grid  md:grid-cols-3 gap-10 ">
            <Step />
            <Step />
            <Step />
          </div>
        </div>

        <div className="p-20 px-5 md:px-20 flex flex-col  gap-12">
          <div className="grid md:grid-cols-2 gap-5  md:gap-20">
            <div className="text-5xl font-bold">
              Where Designers Thrive, Creativity Flows, and Teams Grow.
            </div>
            <div className="flex flex-col  gap-5 opacity-80">
              <p>
                Velit purus enim et massa laoreet id duis magnis lobortis nisl.
                Donec eros ultrices aenean est porta dolor. Consectetuer
                consectetur sapien nascetur ullamcorper velit in eu hac auctor
                parturient platea.
              </p>
              <div>
                <button className="bg-orange-200 px-8 py-4 uppercase font-semibold text-amber-700">
                  Discover more
                </button>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Buy />
            <Buy />
            <Buy />
            <Buy />
            <Buy />
            <Buy />
          </div>
        </div>
        <div className="bg-bulb px-5 py-20 md:p-40 relative">
          <div className="h-full w-full bg-black absolute top-0 z-0 left-0 bg-opacity-30"></div>
          <div className="flex flex-col z-20 relative justify-center items-center gap-10">
            <div>
              {" "}
              <h1 className="text-5xl text-white font-bold">Bring Success</h1>
            </div>
            <div className="md:px-20 text-white opacity-85 text-center">
              <p>
                Don’t miss this incredible opportunity to enhance your home’s
                beauty and Vastu compliance while saving big. This limited-time
                30% discount offer won’t last forever, so act quickly and take
                the first step toward a more harmonious and prosperous life.
              </p>
            </div>
            <div>
              <button className="bg-orange-200 px-8 py-4 uppercase font-semibold text-amber-700">
                Discover more
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </productcon.Provider>
  );
}
