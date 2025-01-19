import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LiaArrowRightSolid } from "react-icons/lia";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import Image1 from "../../assets/products-images/tranding-image-1.png";
import Image2 from "../../assets/products-images/tranding-image-2.png";
import Image3 from "../../assets/products-images/tranding-image-3.png";
import Image4 from "../../assets/products-images/tranding-image-4.png";

const ProductInformation = [
  {
    key: 1,
    name: `SUNSHINE PUNK`,
    image: `${Image1}`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga.`,
    price: `$42.00`,
    color: `#FCD34D`,
  },
  {
    key: 2,
    name: `Green Harlequin`,
    image: `${Image2}`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga.`,
    price: `$42.00`,
    color: `#115E59`,
  },
  {
    key: 3,
    name: `Thunder Blue`,
    image: `${Image3}`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga.`,
    price: `$42.00`,
    color: `#7DD3FC`,
  },
  {
    key: 4,
    name: `SUNSHINE PUNK`,
    image: `${Image4}`,
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora, fuga.`,
    price: `$42.00`,
    color: `#DC2626`,
  },
];

const RecentProductsCard = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 px-2 lg:px-10">
      <h1 className="text-xl font-mono font-semibold border-b-[2px] pb-1 border-black w-fit m-auto">
        Tranding <span className="text-Red"> Products </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[30px]">
        {ProductInformation.map((item, index) => {
          return (
            <div
              className="shadow-3xl rounded-t-lg overflow-hidden"
              key={index}
            >
              <div className="overflow-hidden relative rounded-t-lg">
                <img
                  src={item.image}
                  alt=""
                  style={{ backgroundColor: item.color }}
                  className={`cursor-pointer hover:scale-110 transition-all duration-200`}
                  onClick={() => navigate("/productInfo")}
                />
                <img
                  src="./products-image/nike-icon.png"
                  alt=""
                  className="absolute -top-1 left-3 w-[70px]"
                />
              </div>
              <div className="flex flex-col items-center justify-center text-center  py-[15px] px-[5px]">
                <h1 className="font-mono font-bold text-gray-500 ">NIKE</h1>
                <h2 className="mt-[3px] font-semibold font-mono">
                  {item.name}
                </h2>
                <p className="text-sm mt-[3px] font-regular">
                  {item.description}
                </p>
                <span className="flex text-red mt-[10px] text-lg">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarOutline />
                  <IoIosStarOutline />
                </span>
              </div>
              <div className="flex items-center bg-red relative pt-[5px]">
                <button
                  className="w-[45%] text-white text-xs font-mono py-2 px-4"
                  onClick={() => {
                    window.location.href = "collection";
                  }}
                >
                  BUY NOW
                </button>
                <div className="bg-white text-black w-[55%] text-xs font-main text-center py-2 px-3 absolute -right-[10px] -skew-x-[30deg]">
                  <span className="skew-x-[30deg] inline-block font-bold text-sm">
                    {item.price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default RecentProductsCard;
