const OrderDetail = () => {
  return (
    <div>
      <div>
        <div className="py-5">
          {/* text  */}
          <h1 className=" text-xl text-black font-bold">All Order</h1>
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
                  Location Name
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
              <tr className="text-black">
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black ">
                  1.
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black first-letter:uppercase ">
                  {"name"}
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black cursor-pointer ">
                  Edit
                </td>
                <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-gray-300  text-black text-red-500 cursor-pointer ">
                  Delete
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
