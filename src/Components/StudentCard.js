import React from "react";
import {  FaGraduationCap, FaSchool } from "react-icons/fa";
import { Link } from "react-router-dom";

const StudentCard = ({ student }) => {
  return (
    <>
      <Link to={`/student/${student.studentId}`}>
        <div className="h-64 w-64  bg-gradient-to-r from-gray-100 via-gray-100/50 to-gray-200 hover:from-gray-300 hover:-translate-y-2 transition ease-in-out duration-300 border-2 border-slate-200 rounded-md cursor-pointer">
          <div className="flex p-2 flex-col h-full justify-items-center">
            <p className="text-center text-lg font-semibold mt-2 mb-2">{`${student.firstName} ${student.lastName}`}</p>
            {/* <div className="flex items-center m-2 h-1/3">
              <div className="flex items-center">
                <FaAddressCard />
                <p className="font-semibold ml-1">Boleta:</p>
              </div>
              <span className="text-md w-full text-center">{`${alumno.boleta}`}</span>
            </div> */}
            <div className="flex items-center m-2  h-1/3">
              <div className="flex items-center">
                <FaGraduationCap />
                <p className="font-semibold ml-1">Carrera:</p>
              </div>
              <span className="text-md w-full text-center">{`${student.career}`}</span>
            </div>
            <div className="flex items-center m-2 h-1/3">
              <div className="flex items-center">
                <FaSchool />
                <p className="font-semibold ml-1">Plantel:</p>
              </div>
              <span className="text-md w-full text-center">{`${student.school}`}</span>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default StudentCard;
