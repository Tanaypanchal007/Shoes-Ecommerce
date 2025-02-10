import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import { IoIosAdd } from "react-icons/io";

const categoryList = [
  { name: "Puma" },
  { name: "Nike" },
  { name: "Red Tape" },
  { name: "Adidas" },
  { name: "Skechers" },
  { name: "Asics" },
  { name: "Bata" },
];

const AddProductPage = () => {
  const context = useContext(myContext);

  // navigate
  const navigate = useNavigate();

  // product state
  const [product, setProduct] = useState({
    title: "",
    price: "",
    productImageUrl: "",
    additionalImages: [], // New field for additional images
    category: "",
    description: "",
    quantity: 1,
    sizes: [], // New field for sizes
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Additional image URL input state
  const [imageUrl, setImageUrl] = useState("");

  // Size input state
  const [sizeInput, setSizeInput] = useState(""); // Input field for sizes

  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.productImageUrl === "" ||
      product.category === "" ||
      product.description === "" ||
      product.sizes.length === 0 // Ensure sizes are added
    ) {
      return toast.error("All fields are required");
    }

    try {
      const productRef = collection(fireDB, "products");
      await addDoc(productRef, product);
      toast.success("Product added successfully");
      navigate("/adminDashboard");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add product");
    }
  };

  // Add additional image to the list
  const addAdditionalImage = () => {
    if (imageUrl.trim() === "") {
      return toast.error("Image URL cannot be empty");
    }
    setProduct((prev) => ({
      ...prev,
      additionalImages: [...prev.additionalImages, imageUrl],
    }));
    setImageUrl(""); // Clear input field
    toast.success("Image added to the list");
  };

  // Add size to the sizes array
  const addSize = () => {
    if (sizeInput.trim() === "") {
      return toast.error("Size cannot be empty");
    }
    setProduct((prev) => ({
      ...prev,
      sizes: [...prev.sizes, sizeInput],
    }));
    setSizeInput(""); // Clear input field
    toast.success("Size added to the list");
  };

  return (
    <div className="flex justify-center items-center h-screen font-mono">
      <div className="">
        <div className="bg-lightBg px-7 py-5 w-[450px] shadow-3xl">
          <div className="w-full">
            <h2 className="text-center mb-4 text-xl font-semibold">
              Add Product
            </h2>
          </div>

          {/* Input One */}
          <div>
            <input
              type="text"
              name="title"
              className="w-full mb-3 px-2 h-[50px] rounded outline-none"
              value={product.title}
              onChange={(e) => {
                setProduct({
                  ...product,
                  title: e.target.value,
                });
              }}
              placeholder="Product Title"
            />
          </div>

          {/* Price Input */}
          <div>
            <input
              type="number"
              name="price"
              className="w-full mb-3 px-2 h-[50px] rounded outline-none"
              value={product.price}
              onChange={(e) => {
                setProduct({
                  ...product,
                  price: e.target.value,
                });
              }}
              placeholder="Product Price"
            />
          </div>

          {/* Main Image Input  */}
          <div>
            <input
              type="text"
              name="productImageUrl"
              className="w-full mb-3 px-2 h-[50px] rounded outline-none"
              value={product.productImageUrl}
              onChange={(e) => {
                setProduct({
                  ...product,
                  productImageUrl: e.target.value,
                });
              }}
              placeholder="Main Product Image URL"
            />
          </div>

          {/* Additional Images */}
          <div className="flex gap-2 items-center w-full">
            <input
              type="text"
              className="w-[85%] mb-3 px-2 h-[50px] rounded outline-none"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Add Additional Image URL"
            />
            <button
              onClick={addAdditionalImage}
              type="button"
              className="bg-white flex justify-center items-center w-[15%] px-2 h-[50px] rounded  mb-3"
            >
              <IoIosAdd />
            </button>
          </div>

          {/* Display Additional Images */}
          <div className="">
            {product.additionalImages.length > 0 && (
              <ul className="list-disc pl-5">
                {product.additionalImages.map((img, index) => (
                  <li key={index} className="text-sm line-clamp-1">
                    {img}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Sizes Input */}
          <div className="flex gap-2 items-center w-full">
            <input
              type="text"
              className="w-[85%] mb-3 px-2 h-[50px] rounded outline-none"
              value={sizeInput}
              onChange={(e) => setSizeInput(e.target.value)}
              placeholder="Add Product Size"
            />
            <button
              onClick={addSize}
              type="button"
              className="bg-white flex justify-center items-center w-[15%] px-2 h-[50px] rounded  mb-3"
            >
              <IoIosAdd />
            </button>
          </div>

          {/* Display Sizes */}
          <div className="">
            {product.sizes.length > 0 && (
              <ul className="list-disc pl-5">
                {product.sizes.map((size, index) => (
                  <li key={index} className="text-sm">
                    {size}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Input Four */}
          <div>
            <select
              value={product.category}
              className="w-full mb-3 px-2 h-[50px] rounded outline-none"
              onChange={(e) => {
                setProduct({
                  ...product,
                  category: e.target.value,
                });
              }}
            >
              <option>Select Shoes Brand</option>
              {categoryList.map((value, index) => {
                const { name } = value;
                return (
                  <option key={index} value={name} className="">
                    {name}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Input Five */}
          <div>
            <textarea
              value={product.description}
              onChange={(e) => {
                setProduct({
                  ...product,
                  description: e.target.value,
                });
              }}
              name="description"
              className="w-full mb-3 px-2  rounded outline-none"
              placeholder="Product Description"
              rows="4"
            ></textarea>
          </div>

          {/* Add Product Button */}
          <div className="flex justify-center items-center w-full">
            <button
              onClick={addProductFunction}
              type="button"
              className="bg-primaryColor w-full px-2 h-[40px] rounded text-white"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
