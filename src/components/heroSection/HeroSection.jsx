import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaPinterest, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import line from "../../assets/line.png";
import heroSectionImage from "../../assets/HeroImg.svg";

const HeroSection = () => {
  return (
    <>
      <section className="flex justify-center relative items-center w-full h-screen bg-black overflow-hidden z-40 pt-10 lg:pt-0">
        <img
          src={line}
          alt=""
          className="absolute -bottom-[50px] -right-28 w-[270px]"
        />
        <img
          src={line}
          alt=""
          className="absolute -bottom-[100px] -right-28 w-[280px]"
        />
        <div className="absolute bottom-[30px] left-[138px] flex gap-4 text-3xl">
          <Link
            to="/"
            className="text-white focus:text-red border-b-[2px] pb-1 border-black hover:text-red hover:border-b-[2px] hover:border-red focus:border-b-[2px] focus:border-red "
          >
            <FaInstagram />
          </Link>
          <Link className="text-white focus:text-red border-b-[2px] pb-1 border-black hover:text-red hover:border-b-[2px] hover:border-red focus:border-red">
            <FaXTwitter />
          </Link>
          <Link className="text-white focus:text-red border-b-[2px] pb-1 border-black hover:text-red hover:border-b-[2px] hover:border-red focus:border-red">
            <FaPinterest />
          </Link>
          <Link className="text-white focus:text-red border-b-[2px] pb-1 border-black hover:text-red hover:border-b-[2px] hover:border-red focus:border-red ">
            <FaMedium />
          </Link>
          <Link className="text-white focus:text-red border-b-[2px] pb-1 border-black hover:text-red hover:border-b-[2px] hover:border-red focus:border-red ">
            <FaGoogle />
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row justify-around items-center w-full px-10  ">
          <div className="space-y-3   px-[10px] h-fit z-50 ">
            <div className="">
              <h1 className="text-white font-title text-2xl lg:text-4xl font-medium">
                RUN TO GROW.
              </h1>
              <h1 className="text-white font-title text-2xl lg:text-4xl  font-medium">
                GROW TO <span className="text-red font-medium"> WIN </span>.
              </h1>
            </div>
            <p className="text-white font-mono">
              Unleash your potential with Us.
            </p>
            <div className="gap-4 flex">
              <button className="font-mono text-[11px] text-white border-[1px] border-red bg-red px-[25px] py-[5px]">
                BUY NOW
              </button>
              <button className="font-mono text-[11px]  text-white border-[1px] border-red px-[25px] py-[5px]">
                EXPLORE
              </button>
            </div>
          </div>
          <div>
            <img
              src={heroSectionImage}
              alt=""
              className="w-[500px] h-[450px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
