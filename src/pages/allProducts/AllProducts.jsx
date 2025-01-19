import React from "react";

import { FaStar } from "react-icons/fa6";

import Layout from "../../components/layout/Layout";
import image1 from "../../assets/ShoesImages/image-1.svg";
import image2 from "../../assets/ShoesImages/image-5.svg";
import image3 from "../../assets/ShoesImages/image-3.svg";
import image4 from "../../assets/ShoesImages/image-1.svg";
import image5 from "../../assets/ShoesImages/image-5.svg";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
  const ProductsInfo = [
    {
      id: 1,
      image: `${image1}`,
      title: `PUMA Quizer`,
      price: `$28.00`,
      label: `Puma`,
      rating: `4.8`,
    },
    {
      id: 2,
      image: `${image2}`,
      title: `Adidas Wilders`,
      price: `$28.00`,
      label: `Adidas`,
      rating: `4.2`,
    },
    {
      id: 3,
      image: `${image3}`,
      title: `PUMA 101`,
      price: `$28.00`,
      label: `Puma`,
      rating: `4.1`,
    },
    {
      id: 4,
      image: `${image4}`,
      title: `PUMA Quizer`,
      price: `$28.00`,
      label: `Puma`,
      rating: `4.9`,
    },
    {
      id: 5,
      image: `${image5}`,
      title: `Adidas Wilders`,
      price: `$28.00`,
      label: `Adidas`,
      rating: `4.5`,
    },
    {
      id: 6,
      image: `${image5}`,
      title: `Adidas Wilders`,
      price: `$28.00`,
      label: `Adidas`,
      rating: `4.3`,
    },
    {
      id: 7,
      image: `${image4}`,
      title: `PUMA Quizer`,
      price: `$28.00`,
      label: `Puma`,
      rating: `4.8`,
    },
    {
      id: 8,
      image: `${image3}`,
      title: `PUMA 101`,
      price: `$28.00`,
      label: `Puma`,
      rating: `5.0`,
    },
  ];

  const navigate = useNavigate();

  return (
    <Layout>
      <section className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 lg:gap-5">
          {ProductsInfo.map((data, index) => {
            return (
              <div key={index} className="mx-auto">
                <div>
                  <img
                    src={data.image}
                    alt=""
                    className="cursor-pointer"
                    onClick={() => navigate("/productinfo")}
                  />
                </div>
                <div className="px-3">
                  <div className="flex justify-between item-center">
                    <h1 className="font-mono font-semibold">{data.title}</h1>
                    <p className="font-mono font-semibold">{data.price}</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="flex items-center gap-1">
                      <FaStar />
                      {data.rating}
                    </p>
                    <button className="bg-red text-white font-mono rounded px-2 py-1 text-sm">
                      Add
                    </button>
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
