import React from "react";
import Layout from "../../components/layout/Layout";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const ProductInfo = () => {
  return (
    <Layout>
      <section className="p-10 flex ">
        <div className="w-1/2 flex gap-5">
          <div className="flex flex-col gap-3">
            <img
              src="https://baccabucci.com/cdn/shop/files/2_7c25e6e8-2166-4374-b6a9-eb148670cb28_1000x.jpg?v=1724651828"
              alt=""
              className="w-[130px] h-[159px] object-cover"
            />
            <img
              src="https://baccabucci.com/cdn/shop/files/2_7c25e6e8-2166-4374-b6a9-eb148670cb28_1000x.jpg?v=1724651828"
              alt=""
              className="w-[130px] h-[159px]  object-cover  opacity-50"
            />
            <img
              src="https://baccabucci.com/cdn/shop/files/2_7c25e6e8-2166-4374-b6a9-eb148670cb28_1000x.jpg?v=1724651828"
              alt=""
              className="w-[130px] h-[159px]  object-cover  opacity-50"
            />
          </div>
          <div>
            <img
              src="https://baccabucci.com/cdn/shop/files/2_7c25e6e8-2166-4374-b6a9-eb148670cb28_1000x.jpg?v=1724651828"
              alt=""
              className="w-[500px] h-[500px] object-cover"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-2">
          <h1 className="font-mono font-semibold text-2xl">
            Bacca Bucci Manhattan Low-Top Sneakers
          </h1>
          <p className="font-mono font-medium text-xl">Sneakers</p>
          <div className="flex gap-1 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <FaRegStar />
          </div>
          <p className="font-mono text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            ut doloremque, quod quae nihil sint? In quis, sapiente sed suscipit,
            totam magnam illo ratione molestias omnis recusandae ad. Possimus
            quibusdam doloremque provident a. Ducimus eligendi quo laboriosam
            voluptatum consequatur veniam! Hic dolorem pariatur excepturi
            placeat explicabo deserunt minus rem nesciunt.
          </p>

          <h2 className="text-3xl font-semibold flex items-center gap-2">
            ₹1999.00 <del className="text-xl text-gray-500 ">₹2599.00</del>
          </h2>
          <div className="flex items-center gap-4 mt-2">
            <button className="w-14 border-[1px] border-primaryColor text-black font-semibold rounded flex justify-center">
              UK-6
            </button>
            <button className="w-14 border-[1px] border-primaryColor text-black font-semibold rounded flex justify-center">
              UK-7
            </button>
            <button className="w-14 border-[1px] border-primaryColor text-black font-semibold rounded flex justify-center">
              UK-8
            </button>
            <button className="w-14 border-[1px] border-primaryColor text-black font-semibold rounded flex justify-center">
              UK-9
            </button>
            <button className="w-14 border-[1px] border-primaryColor text-black font-semibold rounded flex justify-center">
              UK-10
            </button>
          </div>
          <button className="bg-primaryColor text-white w-fit px-5 py-2 rounded mt-2">
            Add To Cart
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductInfo;
