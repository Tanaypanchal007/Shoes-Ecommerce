import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import myContext from "../../context/MyContext";

const About = () => {
  const context = useContext(myContext);
  const name = context;

  return (
    <Layout>
      <h1>{name}</h1>
    </Layout>
  );
};

export default About;
