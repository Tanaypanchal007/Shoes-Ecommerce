import React, { useEffect, useState } from "react";
import Layout from "../../components/layout/Layout";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { fireDB } from "../../firebase/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const ProductInfo = () => {
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState(""); // State to manage the main image
  const { id } = useParams();

  // Fetch product data from Firestore
  const getProductData = async () => {
    try {
      const productRef = doc(fireDB, "products", id);
      const productSnapshot = await getDoc(productRef);

      if (productSnapshot.exists()) {
        const productData = productSnapshot.data();
        setProduct(productData);
        setMainImage(productData?.productImageUrl || "default-image.jpg");
      } else {
        console.error("No product found");
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProductData();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className="container mx-auto flex flex-col md:flex-row gap-10 mt-10">
        {/* Left Section: Images */}
        <div className="w-full md:w-1/2 flex gap-5">
          {/* Thumbnail Images */}
          <div className="flex flex-col gap-3">
            {product.additionalImages?.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-[130px] h-[130px] object-cover cursor-pointer ${
                  mainImage === image ? "border-2 border-primaryColor" : ""
                }`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
          {/* Main Image */}
          <div>
            <img
              src={mainImage}
              alt={product.title}
              className="w-[500px] h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full md:w-1/2 flex flex-col gap-2">
          <h1 className="font-mono font-semibold text-2xl">
            {product.category}
          </h1>
          <p className="font-mono font-medium text-xl">{product.title}</p>
          <div className="flex gap-1 text-xl">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfStroke />
            <FaRegStar />
          </div>
          <p className="font-mono text-lg">{product.description}</p>

          <h2 className="text-3xl font-semibold flex items-center gap-2">
            ₹{product.price}{" "}
            <del className="text-xl text-gray-500">₹2599.00</del>
          </h2>

          {/* Size Buttons */}
          <div className="flex items-center gap-4 mt-2">
            {product.sizes?.map((size, index) => (
              <button
                className="w-14 border border-primaryColor text-black font-semibold rounded flex justify-center"
                key={index}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-primaryColor text-white w-fit px-5 py-2 rounded mt-2"
            onClick={() => addProducts(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductInfo;
