import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NoContent = () => {
  return (
    <div className="flex mt-2 sm:mt-2 sm:m-auto md:mr-auto md:mt-2 lg:mt-2 lg:mr-auto xl:mr-6 2xl:mr-6 w-5/6 h-screen border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
      <div className="flex flex-col m-auto h-1/3 w-1/2 items-center bg-slate-400 hover:bg-slate-300  transition ease-in-out duration-300 p-2 rounded-md cursor-pointer">
        <Link className="flex flex-col items-center w-full h-full justify-center" to={"/student/new"}>
          <FaUserPlus className="mb-2" size={32}/>
          <span className="sm:text-base md:text-xl lg:text-2xl text-center font-semibold">Agregar un estudiante 📚</span>
        </Link>
      </div>
    </div>
  );
};
