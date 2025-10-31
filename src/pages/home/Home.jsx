import React from "react";
import Navbar from "../../components/home/Navbar";
import Sidebar from "../../components/home/main_content/Sidebar";
import MainContent from "../../components/home/main_content/MainContent";
import AdsSection from "../../components/home/main_content/AdsSection";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* main content page */}
      <div className="grid grid-cols-1 md:grid-cols-12 min-h-[90vh] bg-[#F2F4F7]">
        {/* sidebar */}
        <div className="xl:col-span-3 xl:block hidden">
          <Sidebar />
        </div>
        {/* main content */}
        <div className="xl:col-span-6 col-span-8 ">
          <MainContent />
        </div>
        {/* ads section */}
        <div className="xl:col-span-3 md:block hidden md:col-span-4">
          <AdsSection />
        </div>
      </div>
    </>
  );
};

export default Home;
