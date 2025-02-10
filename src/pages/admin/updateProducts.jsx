import {
  Timestamp,
  addDoc,
  collection,
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate, useParams } from "react-router";

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

const updateProducts = () => {
  const context = useContext(myContext);
  const { getAllProductFunction } = context;

  // navigate
  const navigate = useNavigate();
  const { id } = useParams();

  // product state
  const [productUpdate, setProductUpdate] = useState({
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

  //Fetch Data from the Firebase
  const UpdateProductFunction = async () => {
    try {
      const productTemp = await getDoc(doc(fireDB, "products", id));
      const product = productTemp.data();
      console.log(product);

      //Update variable
      setProductUpdate({
        title: product?.title,
        price: product?.price,
        productImageUrl: product?.productImageUrl,
        category: product?.category,
        description: product?.description,
        quantity: product?.quantity,
        time: product?.time,
        date: product?.date,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Update Data into the Firebase

  const updateProduct = async () => {
    try {
      await setDoc(doc(fireDB, "products", id), productUpdate);
      toast.success("Product updated successfully!");
      getAllProductFunction();
      navigate("/adminDashboard");
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product.");
    }
  };

  useEffect(() => {
    UpdateProductFunction();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen font-mono">
      <div className="">
        <div className="bg-lightBg px-10 py-5 w-[450px] shadow-3xl">
          <div className="w-full">
            <h2 className="text-center mb-4 text-xl font-semibold">
              Update Product
            </h2>
          </div>

          {/* Input One */}
          <div className="">
            <input
              type="text"
              name="title"
              value={productUpdate.title}
              onChange={(e) => {
                setProductUpdate({
                  ...productUpdate,
                  title: e.target.value,
                });
              }}
              className="w-full mb-3 px-2 h-[50px] rounded outline-none"
              placeholder="Product Title"
            />
          </div>

          {/* Input Two */}
          <div>
            <input
              type="number"
              name="price"
              value={productUpdate.price}
              onChange={(e) =>
                setProductUpdate({
                  ...productUpdate,
                  price: e.target.value,
                })
              }
              className="w-full mb-3 px-2 h-[50px] rounded outline-none"
              placeholder="Product Price"
            />
          </div>

          {/* Input Three */}
          <div>
            <input
              type="text"
              name="productImageUrl"
              value={productUpdate.productImageUrl}
              onChange={(e) => {
                setProductUpdate({
                  ...productUpdate,
                  productImageUrl: e.target.value,
                });
              }}
              className="w-full mb-3 px-2 h-[50px] rounded outline-none"
              placeholder="Product Image URL"
            />
          </div>

          {/* Input Four */}
          <div>
            <select
              className="w-full mb-3 px-2 h-[50px] rounded outline-none"
              value={productUpdate.category}
              onChange={(e) => {
                setProductUpdate({
                  ...productUpdate,
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
              name="description"
              value={productUpdate.description}
              onChange={(e) => {
                setProductUpdate({
                  ...productUpdate,
                  description: e.target.value,
                });
              }}
              className="w-full mb-3 px-2  rounded outline-none"
              placeholder="Product Description"
              rows="4"
            ></textarea>
          </div>

          {/* Add Product Button */}
          <div className="flex justify-center items-center w-full">
            <button
              type="button"
              className="bg-primaryColor w-full px-2 h-[40px] rounded text-white"
              onClick={updateProduct}
            >
              Update Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default updateProducts;
