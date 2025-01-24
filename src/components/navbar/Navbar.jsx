import { React, useState } from "react";
import NavbarLogo from "../../assets/Logo/navbar-logo.svg";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { PiShoppingCartLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { MdLogin } from "react-icons/md";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));

  // Logout function
  const logout = () => {
    localStorage.removeItem("users");

    setTimeout(() => {
      navigate("/login");
    }, 100);
  };

  return (
    <nav className="bg-black px-5 py-3 sticky top-0 z-50">
      <section className="flex justify-between items-center">
        <div>
          <img src={NavbarLogo} alt="logo" className="w-[110px] lg:w-[130px]" />
        </div>
        <div className="text-white items-center gap-5 font-mono hidden lg:flex">
          <NavLink to="/" className={`hover:text-red text-[20px]`}>
            HOME
          </NavLink>
          <NavLink to="/about" className={`hover:text-red text-[20px]`}>
            ABOUT
          </NavLink>
          <NavLink to="/allProducts" className={`hover:text-red text-[20px]`}>
            PRODUCTS
          </NavLink>
          {user?.role === "user" && (
            <NavLink
              to="/userDashboard"
              className={`hover:text-red text-[20px]`}
            >
              ORDERS
            </NavLink>
          )}
          <NavLink to="/contact" className={`hover:text-red text-[20px]`}>
            CONTACT
          </NavLink>
          {user?.role == "admin" && (
            <NavLink
              to="/adminDashboard"
              className={`hover:text-red text-[20px]`}
            >
              ADMIN
            </NavLink>
          )}
          <Link to="/cart">
            <PiShoppingCartLight className={`hover:text-red text-[25px]`} />
          </Link>
          <Link to="/wishlist">
            <CiHeart className={`hover:text-red text-[25px]`} />
          </Link>
          {!user ? (
            <Link to="/login">
              {/* <MdLogin className={`hover:text-red text-[25px]`} /> */}
              <h1>Login</h1>
            </Link>
          ) : (
            <Link onClick={logout}>
              {/* <MdLogin className={`hover:text-red text-[25px]`} /> */}
              <h1>Logout</h1>
            </Link>
          )}
        </div>

        {/* Mobile view navbar start */}
        <div
          className={`text-white lg:hidden absolute top-14 left-0 w-full ${
            open ? "translate-x-0" : "translate-x-[-100%]"
          } transform transition-transform duration-500 `}
        >
          <div className="flex flex-col bg-black gap-6 h-screen pt-5 items-center">
            <NavLink to="/" className={`hover:text-red text-[20px]`}>
              HOME
            </NavLink>
            <NavLink to="/about" className={`hover:text-red text-[20px]`}>
              ABOUT
            </NavLink>
            <NavLink to="/allProducts" className={`hover:text-red text-[20px]`}>
              PRODUCTS
            </NavLink>
            <NavLink to="/contact" className={`hover:text-red text-[20px]`}>
              CONTACT
            </NavLink>
            <NavLink to="/wishlist" className={`hover:text-red text-[20px]`}>
              WISHLIST
            </NavLink>
          </div>
        </div>

        <div className="text-white flex items-center gap-3 lg:hidden">
          <Link to="/cart">
            <PiShoppingCartLight className={`hover:text-red text-[30px]`} />
          </Link>
          {!user ? (
            <Link to="/login">
              <MdLogin className={`hover:text-red text-[30px]`} />
            </Link>
          ) : (
            <Link onClick={logout}>
              <h1>Logout</h1>
            </Link>
          )}
          <Link>
            {open ? (
              <IoClose
                className={`hover:text-red text-[30px]`}
                onClick={handleToggle}
              />
            ) : (
              <FaBars
                className={`hover:text-red text-[30px]`}
                onClick={handleToggle}
              />
            )}
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
