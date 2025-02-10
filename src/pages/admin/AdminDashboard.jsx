import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GoListOrdered } from "react-icons/go";
import { FiUsers } from "react-icons/fi";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ProductDetail from "../../components/admin/ProductDetils";
import OrderDetail from "../../components/admin/OrderDetail";
import UserDetail from "../../components/admin/UserDetail";
import { useContext } from "react";
import MyContext from "../../context/MyContext";

const AdminDashboard = () => {
  const context = useContext(MyContext);
  const { getAllProducts } = context;

  return (
    <div>
      {/* Top */}
      <div className="top mb-5 px-5 mt-5">
        <div className=" bg-gray-50 py-5 border border-gray-300 rounded-lg">
          <h1 className=" text-center text-2xl font-bold text-black">
            Admin Dashboard
          </h1>
        </div>
      </div>

      <div className="px-5">
        {/* Mid  */}
        {/* <div className="mid mb-5">
          <div className=" bg-gray-50 py-5 rounded-xl border border-gray-300">
            <div className="flex justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
                alt=""
              />
            </div>

            <div className="">
              <h1 className=" text-center text-lg text-black">
                <span className=" font-bold">Name :</span> Kamal Nayan Upadhyay
              </h1>
              <h1 className=" text-center text-lg text-black">
                <span className=" font-bold">Email :</span> test@gmail.com
              </h1>
            </div>
          </div>
        </div> */}

        {/* Bottom */}
        <div className="">
          <Tabs>
            <TabList className="flex flex-wrap -m-4 text-center justify-center">
              {/* Total Products */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer outline-none">
                <div className=" border bg-gray-50 hover:bg-gray-100 border-gray-300 px-4 py-3 rounded-xl">
                  <div className="text-black mb-3 flex justify-center items-center ">
                    <MdOutlineProductionQuantityLimits className="text-5xl" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-black fonts1">
                    {getAllProducts.length}
                  </h2>
                  <p className=" text-black  font-bold">Total Products</p>
                </div>
              </Tab>

              {/* Total Order  */}
              <Tab className="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer outline-none">
                <div className=" border bg-gray-50 hover:bg-gray-100 border-gray-300 px-4 py-3 rounded-xl">
                  <div className="text-black mb-3 flex justify-center items-center ">
                    <GoListOrdered className="text-5xl" />
                  </div>
                  <h2 className="title-font font-medium text-3xl text-black fonts1">
                    10
                  </h2>
                  <p className=" text-black font-bold">Total Order</p>
                </div>
              </Tab>

              {/* Total User  */}
              <Tab className="p-4 md:w-1/3 sm:w-1/2 w-full cursor-pointer outline-none">
                <div className=" border bg-gray-50 hover:bg-gray-100 border-gray-300 px-4 py-3 rounded-xl">
                  <div className="text-black w-12 h-12 mb-3 inline-block">
                    <div className="text-black mb-3 flex justify-center items-center ">
                      <FiUsers className="text-5xl" />
                    </div>
                  </div>
                  <h2 className="title-font font-medium text-3xl text-black fonts1">
                    10
                  </h2>
                  <p className=" text-black font-bold">Total Order</p>
                </div>
              </Tab>
            </TabList>

            {/* Tab Panel Start Here... */}

            <TabPanel>
              <ProductDetail />
            </TabPanel>
            <TabPanel>
              <OrderDetail />
            </TabPanel>
            <TabPanel>
              <UserDetail />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
