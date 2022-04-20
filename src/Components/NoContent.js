import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NoContent = () => {
  return (    
      <div className="flex p-10 mt-2 sm:mt-2 sm:m-auto md:mr-auto md:mt-2 lg:mt-2 lg:mr-auto xl:mr-6 2xl:mr-6 w-5/6 sm:w-5/6 h-screen border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 animate__animated animate__delay-3s">
        <div className="flex flex-col m-auto w-2/3 h-1/4 sm:p-2 sm:h-1/3 sm:w-1/2 items-center bg-slate-400 hover:bg-slate-300  transition ease-in-out duration-300 rounded-md cursor-pointer animate__animated animate__fadeIn animate__delay-3s">
          <Link
            className="flex flex-col items-center w-full h-full justify-center  animate__animated animate__delay-3s"
            to={"/student/new"}
          >
            <FaUserPlus className="mb-2" size={32} />
            <span className="sm:text-base md:text-xl lg:text-2xl text-center font-semibold  animate__animated animate__delay-3s">
              Agregar un estudiante 📚
            </span>
          </Link>
        </div>
      </div>    
  );
};
