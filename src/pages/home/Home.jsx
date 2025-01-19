import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/heroSection/HeroSection";
import HomeCategories from "../../components/homeCategories/HomeCategories";
import RecentProductsCard from "../../components/recentProductsCard/RecentProductsCard";

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <HomeCategories />
      <RecentProductsCard />
    </Layout>
  );
};

export default Home;
