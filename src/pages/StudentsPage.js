import React from "react";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import StudentCard from "../Components/StudentCard";

const StudentsPage = () => {
  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 h-6/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          <div className="flex flex-row justify-between p-4">
            {/* {titles.map((item) => {
              return <MenuItem key={item.title} item={item} />;
            })} */}
          </div>

          <div className="grid grid-cols-4 gap-y-8 justify-items-center">
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />
            <StudentCard />          
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentsPage;
