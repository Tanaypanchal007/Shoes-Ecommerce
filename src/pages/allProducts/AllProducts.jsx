import React, { useContext } from "react";
import { FaStar } from "react-icons/fa6";
import Layout from "../../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";

const AllProducts = () => {
  const context = useContext(MyContext);
  const { getAllProducts } = context;

  const navigate = useNavigate();

  return (
    <Layout>
      <section className="py-3 px-2 lg:px-10">
        <h1 className="text-xl font-mono font-semibold border-b-[2px] pb-1 border-black w-fit m-auto">
          Tranding <span className="text-Red"> Products </span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[30px]">
          {getAllProducts.map((data, index) => {
            const { id, title, price, productImageUrl, category } = data;
            return (
              <div
                className="shadow-3xl rounded-t-lg overflow-hidden"
                key={index}
              >
                <div className="overflow-hidden relative rounded-t-lg">
                  <img
                    src={productImageUrl}
                    alt=""
                    // style={{ backgroundColor: item.color }}
                    className={`cursor-pointer hover:scale-110 transition-all duration-200 h-[350px] w-[100%] object-cover`}
                    onClick={() => navigate(`/productInfo/${id}`)}
                  />
                  <img
                    src="./products-image/nike-icon.png"
                    alt=""
                    className="absolute -top-1 left-3 w-[70px]"
                  />
                </div>
                <div className="flex flex-col items-center justify-center text-center py-[15px] px-[8px] ">
                  <h1 className="font-mono font-bold text-gray-500 text-[18px]">
                    {category}
                  </h1>
                  <h2 className="mt-[3px] font-semibold font-mono text-[14px]">
                    {title}
                  </h2>
                  <p className="text-sm mt-[3px] font-regular line-clamp-2">
                    {data.description}
                  </p>
                  <span className="flex text-red mt-[10px] text-lg">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                  </span>
                </div>
                <div className="flex items-center bg-red relative  pt-[5px]">
                  <button
                    className="w-[45%] text-white text-xs font-mono py-2 px-4"
                    onClick={() => navigate(`/productInfo/${id}`)}
                  >
                    View Products
                  </button>
                  <div className="bg-white text-black w-[55%] text-xs font-main text-center py-2 px-3 absolute -right-[10px] -skew-x-[30deg]">
                    <span className="skew-x-[30deg] inline-block font-bold text-sm">
                      ${price}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default AllProducts;
