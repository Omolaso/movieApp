import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
  return (
    <main className="bg-backgroundBlack min-h-screen">
      <Navbar />

      <div className="flex items-center justify-center text-movieHubWhite w-full sm:max-w-[500px] md:max-w-[700px] lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] mx-auto mt-[10px]">
        <Outlet />
      </div>
    </main>
  );
};

export default SharedLayout;
