import React from "react";
import { Link } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import { FaInstagram, FaPinterest, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="font-mono px-12 py-8 border-t-2 mt-2">
      <div className="flex flex-wrap justify-between">
        <div className="w-full lg:w-auto mt-10 lg:mt-0">
          <h2 className="font-bold mb-2 text-lg font-title">Stay in touch</h2>
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="bg-gray-100 border-[2px] font-title border-black border-r-0 py-[7px] px-2 flex-grow outline-none"
            />
            <button className="bg-black text-white py-[11px] px-4">
              <LiaArrowRightSolid className="text-xl" />
            </button>
          </form>
          <div className=" mt-16 flex gap-4 text-3xl">
            <Link to="/" className="text-gray-900 font-thin">
              <FaInstagram />
            </Link>
            <Link>
              <FaXTwitter className="text-balance" />
            </Link>
            <Link className="text-gray-900 ">
              <FaPinterest />
            </Link>
            <Link className="text-gray-900 ">
              <FaMedium />
            </Link>
            <Link className="text-gray-900 ">
              <FaGoogle />
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-auto flex flex-col lg:flex-row lg:space-x-28 space-y-8 lg:space-y-0">
          <div>
            <h2 className="font-bold font-title mb-2 text-lg">SPORTS</h2>
            <nav className="flex flex-col space-y-1 text-sm text-black font-medium font-mono">
              <Link to="/" className="hover:underline">
                Cricket
              </Link>
              <Link to="/" className="hover:underline">
                Running
              </Link>
              <Link to="/" className="hover:underline">
                Football
              </Link>
              <Link to="/" className="hover:underline">
                Gym/Training
              </Link>
              <Link to="/" className="hover:underline">
                Tennis
              </Link>
              <Link to="/" className="hover:underline">
                Basketball
              </Link>
            </nav>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg font-title">About</h2>
            <nav className="flex flex-col space-y-1 text-sm text-black font-medium font-mono">
              <Link to="" target="_blank" className="hover:underline">
                About us
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Sneaky Stories
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Sneaky App
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Entity Details
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                T&Cs
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Careers
              </Link>
            </nav>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg font-title">Support</h2>
            <nav className="flex flex-col space-y-1 text-sm text-black font-medium font-mono">
              <Link
                to=""
                target="_blank"
                className="hover:underline text-black"
              >
                Help
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Customer Services
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Return
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Shipping
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Order Tracker
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Store Locator
              </Link>
            </nav>
          </div>
          <div>
            <h2 className="font-bold mb-2 text-lg font-title">Collections</h2>
            <nav className="flex flex-col space-y-1 text-sm text-black font-medium font-mono">
              <Link to="" target="_blank" className="hover:underline">
                Nike
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                Puma
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                ordans
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                met
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                ampus
              </Link>
              <Link to="" target="_blank" className="hover:underline">
                neaky
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <hr className="h-[1px] bg-gray-300 mt-3" />
      <p className="text-center text-base mt-2 font-mono">
        © FitPro 2024 | Craeted By Tanay Panchal
      </p>
    </footer>
  );
};

export default Footer;
