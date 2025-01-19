import { React, useState } from "react";
import Layout from "../../components/layout/Layout";
import loginSignupImage from "../../assets/login.svg";
import { FiUser } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

const signup = () => {
  const LoginPageNavigate = useNavigate();

  //Form UseState...
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
  });

  //User Singup Function.....

  const UserSignup = async (e) => {
    e.preventDefault();

    //Form Validation....
    if (
      userData.name == "" ||
      userData.email == "" ||
      userData.password == ""
    ) {
      toast.error("Error");
    }

    // Try - Catch block used for store data in firebase...
    try {
      const users = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );

      const user = {
        name: UserSignup.name,
        email: users.user.email,
        uid: users.user.uid,
        role: userData.role,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      };

      //Create user refrence
      const userRefrence = collection(fireDB, "users");

      //Add User Details

      addDoc(userRefrence, user);

      setuserData({
        name: "",
        email: "",
        password: "",
      });

      LoginPageNavigate("/login");
      toast.success("Signup Successfully");
    } catch (error) {}
  };

  return (
    <section>
      <main className="flex font-mono">
        <div className="w-1/2 bg-blue-300 flex justify-center items-center">
          <img
            src={loginSignupImage}
            alt=""
            className="w-[80%] h-screen object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl font-medium">Welcome</h1>
          <form className="w-[70%]">
            <div className="flex flex-col mt-3 relative">
              <label className="font-medium">Username</label>
              <input
                type="text"
                value={userData.name}
                onChange={(e) =>
                  setuserData({
                    ...userData,
                    name: e.target.value,
                  })
                }
                placeholder="Enter Your Username"
                className="border-[1px] pl-2 pr-10 py-2 mt-2 mb-2 rounded outline-none focus:border-primaryColor"
              />
              <FiUser className="absolute right-2  bottom-[18px] text-xl" />
            </div>
            <div className="flex flex-col mt-3 relative">
              <label className="font-medium">Email</label>
              <input
                type="text"
                value={userData.email}
                onChange={(e) =>
                  setuserData({
                    ...userData,
                    email: e.target.value,
                  })
                }
                placeholder="Enter Your Email"
                className="border-[1px] pl-2 pr-10 py-2 mt-2 mb-2 rounded outline-none focus:border-primaryColor"
              />
              <IoMailOutline className="absolute right-2  bottom-[18px] text-xl" />
            </div>
            <div className="flex flex-col mt-3 relative">
              <label className="font-medium">Password</label>
              <input
                type="text"
                value={userData.password}
                onChange={(e) =>
                  setuserData({
                    ...userData,
                    password: e.target.value,
                  })
                }
                placeholder="Enter Your Password"
                className="border-[1px] pl-2 pr-10  py-2 mt-2 mb-2 rounded outline-none focus:border-primaryColor"
              />
              <FaRegEye className="absolute right-2 bottom-[18px] text-xl" />
            </div>
            <div className="flex flex-col">
              <button
                className="bg-primaryColor py-2 text-white mt-2 rounded"
                onClick={UserSignup}
              >
                Sign up
              </button>
            </div>
            <div className=" mt-7">
              <p className="text-center">Already have an account?</p>
              <button
                className="border-[1px] border-primaryColor py-2 text-black mt-2 rounded w-full"
                onClick={() => LoginPageNavigate("/login")}
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </section>
  );
};

export default signup;
