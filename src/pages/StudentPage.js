import React from "react";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";

const StudentPage = () => {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 h-6/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          <div className="flex flex-row justify-between p-4"></div>

          <div className="grid grid-cols-4 gap-y-8 justify-items-center"></div>
        </div>
      </div>
    </>
  );
};

export default StudentPage;
