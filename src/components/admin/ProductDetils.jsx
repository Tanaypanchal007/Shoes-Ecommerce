import { useContext } from "react";
import { Link } from "react-router-dom";
import MyContext from "../../context/MyContext";

const ProductDetail = () => {
  //Get Products Details from the Firebase using Context

  const context = useContext(MyContext);
  const { getAllProducts } = context;

  console.log(getAllProducts);

  return (
    <div>
      <div className="py-5 flex justify-between items-center">
        {/* text  */}
        <h1 className=" text-xl text-black font-bold">All Product</h1>
        {/* Add Product Button  */}
        <Link
          to="/addProduct"
          className="px-5 py-2 bg-gray-50 border border-gray-300 rounded-lg"
        >
          Add Product
        </Link>
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
                Action
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
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black ">
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
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    {title}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    {price}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    {category}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                    {date}
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black cursor-pointer ">
                    Edit
                  </td>
                  <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black text-red-500 cursor-pointer ">
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
