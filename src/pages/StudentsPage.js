import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
import { NoContent } from "../Components/NoContent";
import { Sidebar } from "../Components/Sidebar";
import { Students } from "../Components/Students";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  const [sort, setSort] = useState("newest");  

  const handleSort = (e) => {
    setSort(e.target.value);
  }

  useEffect(() => {
    const getStudents = async () => {
      try {
        const students = await axios.get(`http://localhost:6418/students`);
        setStudents(students.data);
      } catch (error) {
        console.log("Error en obtener alumno");
      }
    };
    getStudents();
  }, []);



  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center">
        <Sidebar />
        {students.length !== 0 ? (
          <div className="flex flex-col mt-6 sm:mt-6 md:mt-6 lg:mt-6 xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 w-5/6 h-full 2xl:h-screen border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
            <div className="flex flex-col sm:flex-row mb-6 justify-end">
              <Link
                to={"student/new"}
                className="xl:hidden mb-2 sm:mb-0 p-2 rounded-md bg-green-300 transition ease-in-out duration-300 hover:bg-green-400 cursor-pointer"
              >
                <span className="p-2">Agregar un estudiante</span>
              </Link>
              <select
                className="mt-2 sm:ml-2 sm:mt-0 p-2 border bg-gray-100/30 hover:bg-gray-100/60 focus:border focus:border-gray-300 cursor-pointer rounded-lg"
                name=""
                id=""
                onChange={handleSort}
              >
                <option value="newest">Más recientes</option>
                <option value="asc">Alfabetico Ascendente</option>
                <option value="desc">Alfabetico Descendente</option>
              </select>
            </div>

            <Students sort={sort}/>
          </div>
        ) : (
          <NoContent />
        )}
      </main>
      <Footer />
    </>
  );
};

export default StudentsPage;
