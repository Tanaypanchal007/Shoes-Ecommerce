import React from "react";
import Home from "./pages/home/Home";
import NoHome from "./pages/noHome/NoHome";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductInfo from "./pages/productInfo/ProductInfo";
import ScrollTop from "./components/scrollTop/ScrollTop";
import Cart from "./pages/cart/Cart";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import AllProducts from "./pages/allProducts/AllProducts";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/addProducts";
import MyState from "./context/MyState";
import UpdateProducts from "./pages/admin/UpdateProducts";
import { Toaster } from "react-hot-toast";
import { ProtectedRouteForUser } from "./protectedRoute/ProtectedRouteForUser";
import { ProtectedRouteForAdmin } from "./protectedRoute/ProtectedRouteForAdmin";

const App = () => {
  return (
    <MyState>
      <BrowserRouter>
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productInfo/:id" element={<ProductInfo />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/*" element={<NoHome />} />

          <Route
            path="/userDashboard"
            // This element is accessible by an all Users .
            element={
              <ProtectedRouteForUser>
                <UserDashboard />
              </ProtectedRouteForUser>
            }
          />
          <Route
            path="/adminDashboard"
            // This element is only accessible by an admin's email ID and password.
            element={
              <ProtectedRouteForAdmin>
                <AdminDashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/addProduct"
            // This element is only accessible by an admin's email ID and password.
            element={
              <ProtectedRouteForAdmin>
                <AddProduct />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/updateProducts/:id"
            element={
              <ProtectedRouteForAdmin>
                <UpdateProducts />
              </ProtectedRouteForAdmin>
            }
          />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </MyState>
  );
};

export default App;
