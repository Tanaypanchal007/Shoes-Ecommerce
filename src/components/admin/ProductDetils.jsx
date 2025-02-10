import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";

const ProductDetail = () => {
  //Get Products Details from the Firebase using Context

  const context = useContext(MyContext);
  const { getAllProducts, getAllProductFunction } = context;

  console.log(getAllProducts);

  const Navigate = useNavigate();

  //Delete Products From the Database...

  const deleteProduct = async (id) => {
    try {
      await deleteDoc(doc(fireDB, "products", id));
      toast.success("Product Removed");
      getAllProductFunction();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-black font-bold">All Product</h1>
        {/* Add Product Button  */}
        <div className="flex gap-2">
          <Link
            to="/addProduct"
            className="px-5 py-2 bg-gray-50 border border-gray-300 rounded-lg flex items-center"
          >
            Add Product
          </Link>
          <Link to="/allProducts">
            <IoHomeOutline className="flex items-center px-2 py-2 h-[40px] w-[40px] bg-gray-50 border border-gray-300 rounded-lg" />
          </Link>
        </div>
      </div>

      {/* table  */}
      <div className="w-full overflow-x-auto">
        <table className="w-full text-left border border-collapse sm:border-separate border-gray-300 text-black">
          <tbody>
            <tr>
              <th
                scope="col"
                className="h-12 px-6 text-md border-l first:border-l-0 border-gray-300 text-black bg-gray-100 font-bold fontPara"
              >
                S.No.
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-300 text-black bg-gray-100"
              >
                Product Image
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-300 text-black bg-gray-100"
              >
                Product Title
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-300 text-black bg-gray-100"
              >
                Product Price
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-300 text-black bg-gray-100"
              >
                Category
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-300 text-black bg-gray-100"
              >
                Date
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-300 text-black bg-gray-100"
              >
                Edit
              </th>
              <th
                scope="col"
                className="h-12 px-6 text-md font-bold fontPara border-l first:border-l-0 border-gray-300 text-black bg-gray-100"
              >
                Action
              </th>
            </tr>
            {getAllProducts.map((item, inx) => {
              const { id, title, price, category, date, productImageUrl } =
                item;

              return (
                <tr className="text-black" key={inx}>
                  <td className="h-12 px-6 text-md text-center transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black ">
                    {inx + 1}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    <div className="flex justify-center items-center">
                      <img
                        src={productImageUrl}
                        alt=""
                        className="h-[80px] w-[80px] object-cover p-1 cursor-pointer rounded-lg"
                      />
                    </div>
                  </td>
                  <td className="h-12 px-6 text-md text-center transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md text-center transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    {price}
                  </td>
                  <td className="h-12 px-6 text-md text-center transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    {category}
                  </td>
                  <td className="h-12 px-6 text-md text-center transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    {date}
                  </td>
                  <td
                    className="h-12 px-6 text-md text-center transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black cursor-pointer"
                    onClick={() => Navigate(`/updateProducts/${id}`)}
                  >
                    Edit
                  </td>
                  <td
                    className="h-12 px-6 text-md text-center transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black text-red-500 cursor-pointer "
                    onClick={() => deleteProduct(id)}
                  >
                    Delete
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;
