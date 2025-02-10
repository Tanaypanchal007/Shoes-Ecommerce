import React, { useState, useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";
import MyContext from "../context/MyContext";

const MyState = ({ children }) => {
  const [getAllProducts, setGetAllProducts] = useState([]);

  //Get Products Data from the Firebase
  const getAllProductFunction = () => {
    try {
      const q = query(collection(fireDB, "products"), orderBy("time"));
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productArray = [];
        QuerySnapshot.forEach((doc) => {
          productArray.push({ ...doc.data(), id: doc.id });
        });
        setGetAllProducts(productArray);
      });
      return () => data;
    } catch (error) {
      console.log(error);
    }
  };

  // UseEffect is use to call the function automatically...
  useEffect(() => {
    getAllProductFunction();
  }, []);
  return (
    <MyContext.Provider value={{ getAllProducts, getAllProductFunction }}>
      {" "}
      {children}{" "}
    </MyContext.Provider>
  );
};

export default MyState;
