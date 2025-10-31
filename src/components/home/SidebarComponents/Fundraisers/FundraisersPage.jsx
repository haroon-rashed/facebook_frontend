import React from "react";
import Fundraisers from "./Fundraisers";
import FundRaiserSidebar from "./FundRaiserSidebar";

const FundraisersPage = () => {
  return (
    <div className="grid grid-cols-12 h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="col-span-3 hide-scrollbar xl:block hidden h-full overflow-y-auto p-4 border-r">
        <FundRaiserSidebar />
      </div>

      {/* Main Content */}
      <div className="col-span-12 xl:col-span-9 hide-scrollbar h-full overflow-y-auto p-4">
        <Fundraisers />
      </div>
    </div>
  );
};

export default FundraisersPage;
