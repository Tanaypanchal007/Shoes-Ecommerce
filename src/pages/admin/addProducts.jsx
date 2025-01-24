import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";

const categoryList = [
  {
    name: "fashion",
  },
  {
    name: "shirt",
  },
  {
    name: "jacket",
  },
  {
    name: "mobile",
  },
  {
    name: "laptop",
  },
  {
    name: "shoes",
  },
  {
    name: "home",
  },
  {
    name: "books",
  },
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
    category: "",
    description: "",
    quantity: 1,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add Product Function
  const addProductFunction = async () => {
    if (
      product.title === "" ||
      product.price === "" ||
      product.productImageUrl === "" ||
      product.category === "" ||
      product.description === ""
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

  return (
    <div className="flex justify-center items-center h-screen font-mono">
      <div className="">
        <div className="bg-lightBg px-10 py-5 w-[450px] shadow-3xl">
          <div className="w-full">
            <h2 className="text-center mb-4 text-xl font-semibold">
              Add Product
            </h2>
          </div>

          {/* Input One */}
          <div className="">
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

          {/* Input Two */}
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

          {/* Input Three */}
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
              placeholder="Product Image URL"
            />
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
              <option disabled>Select Product Category</option>
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
