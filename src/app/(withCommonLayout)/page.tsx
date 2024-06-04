import Advice from "@/components/ui/HomePage/Advice";
import FlatList from "@/components/ui/HomePage/FlatList";
import HeroSection from "@/components/ui/HomePage/HeroSection";
import ReviewClient from "@/components/ui/HomePage/ReviewClient";
import SearchBar from "@/components/ui/HomePage/SearchBar";
import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SearchBar />
      <FlatList />
      <Advice />
      <ReviewClient />
    </div>
  );
};

export default Home;
