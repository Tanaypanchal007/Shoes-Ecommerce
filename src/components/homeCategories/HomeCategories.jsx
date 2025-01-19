import React from "react";
import { Link } from "react-router-dom";
import kidsShoes from "../../assets/kids-shoes.png";
import manShoes from "../../assets/man-shoes.png";
import womanShoes from "../../assets/woman-shoes.png";

const HomeCategories = () => {
  return (
    <section className="px-2 lg:px-10 ">
      <div className="flex justify-between items-center mt-12">
        <div>
          <p className="text-3xl font-semibold font-mono">Categories</p>
        </div>
        <div>
          <Link to="/all-products">
            <p className="text-xs lg:text-lg font-mono font-semibold border-b border-black">
              All Products
            </p>
          </Link>
        </div>
      </div>
      <div className="flex gap-5 mt-5 max-md:flex-col">
        <div className="relative overflow-hidden">
          <img
            src={manShoes}
            alt="Men's Shoes"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <p className="absolute bottom-0 py-3 w-full text-center text-white bg-black/70 font-mono">
            Men's Collection
          </p>
        </div>

        <div className="relative overflow-hidden">
          <img
            src={womanShoes}
            alt="Women's Shoes"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <p className="absolute bottom-0 py-3 w-full text-center text-white bg-black/70  font-mono">
            Women's Collection
          </p>
        </div>
        <div className="relative overflow-hidden">
          <img
            src={kidsShoes}
            alt="Kids' Shoes"
            className="hover:scale-105 transition-transform duration-300 cursor-pointer"
          />
          <p className="absolute bottom-0 py-3 w-full text-center text-white bg-black/70 font-mono">
            Kids' Collection
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
