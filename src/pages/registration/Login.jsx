import { React, useState } from "react";
import loginSignupImage from "../../assets/login.svg";
import { FaRegEye } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, onSnapshot, query, where } from "firebase/firestore";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const userLoginFunction = async (e) => {
    e.preventDefault();

    const { email, password } = userLogin;

    // Validate inputs
    if (!email || !password) {
      return toast.error("All Fields are required");
    }

    try {
      const users = await signInWithEmailAndPassword(auth, email, password);
      const userQuery = query(
        collection(fireDB, "users"),
        where("uid", "==", users.user.uid)
      );

      onSnapshot(userQuery, (querySnapshot) => {
        const user = querySnapshot.docs.map((doc) => doc.data())[0];

        if (user) {
          localStorage.setItem("users", JSON.stringify(user));
          setUserLogin({ email: "", password: "" });
          toast.success("Login Successfully");

          // Navigate based on user role
          navigate(user.role === "user" ? "/userDashboard" : "/adminDashboard");
        } else {
          toast.error("User data not found");
        }
      });
    } catch (error) {
      console.error(error);
      toast.error("Login Failed");
    }
  };

  return (
    <section>
      <main className="flex font-mono">
        <div className="w-1/2 bg-blue-300 flex justify-center items-center">
          <img
            src={loginSignupImage}
            alt="Login"
            className="w-[80%] h-screen object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col justify-center items-center gap-5">
          <h1 className="text-2xl font-medium">Welcome Back</h1>
          <form className="w-[70%]" onSubmit={userLoginFunction}>
            <div className="flex flex-col mt-3 relative">
              <label className="font-medium">Email</label>
              <input
                type="email"
                value={userLogin.email}
                onChange={(e) =>
                  setUserLogin({ ...userLogin, email: e.target.value })
                }
                placeholder="Enter Your Email"
                className="border-[1px] pl-2 pr-10 py-2 mt-2 mb-2 rounded outline-none focus:border-primaryColor"
              />
              <IoMailOutline className="absolute right-2 bottom-[18px] text-xl" />
            </div>
            <div className="flex flex-col mt-3 relative">
              <label className="font-medium">Password</label>
              <input
                type="password"
                value={userLogin.password}
                onChange={(e) =>
                  setUserLogin({ ...userLogin, password: e.target.value })
                }
                placeholder="Enter Your Password"
                className="border-[1px] pl-2 pr-10 py-2 mt-2 mb-2 rounded outline-none focus:border-primaryColor"
              />
              <FaRegEye className="absolute right-2 bottom-[18px] text-xl" />
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="bg-primaryColor py-2 text-white mt-2 rounded"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-7 w-[70%]">
            <p className="text-center">Don't have an account?</p>
            <button
              className="border-[1px] border-primaryColor py-2 text-black mt-2 rounded w-full"
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Login;
