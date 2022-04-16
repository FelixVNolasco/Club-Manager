import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="h-16 bg-teal-600 text-white w-full">
      <div className="flex flex-row h-16 justify-between items-center">
        <div className="flex md:flex lg:flex lg:flex-row xl:flex xl: flex-row items-center">
          <div className="mr-2 ml-2 mt-1 ">
            <Link to={"/"}>
              <span className="font-semibold text-2xl">Dashboard</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
