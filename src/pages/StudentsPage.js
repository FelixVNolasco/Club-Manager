import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NoContent } from "../Components/NoContent";
import { Sidebar } from "../Components/Sidebar";
import StudentCard from "../Components/StudentCard";

const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [sortType, setSortType] = useState("boleta");  

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

      const sortArray = (type) => {
      const types = {
        boleta: "boleta",
        studentId: "studentId",
        school: "school",
      };
      const sortProperty = types[type];

      console.log(type);

      if(type === 'boleta'){
        const sorted = [...students].sort(
          (a, b) => b[sortProperty] - a[sortProperty]
        );  
        setStudents(sorted);
      } else if (type === 'firstName'){
        const sorted = [...students].sort(
          (a, b) => a.career.localeCompare(b.career)          
        );
          setStudents(sorted);
      } else if (type === "lastName") {
        const sorted = [...students].sort(
          (a, b) => a.lastName.localeCompare(b.lastName))
          setStudents(sorted);
      }            
    };    

  console.log(students);

  return (
    <>
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
                onChange={(e) => {
                  setSortType(e.target.value);
                  sortArray(sortType);
                } }
              >
                <option value="boleta">Por Boleta</option>
                <option value="firstName">Por Nombre</option>
                <option value="lastName">Por Apellido</option>
              </select>
              {/* <div className="ml-2 p-2 bg-gray-200 rounded-md" onClick={() => sortArray(sortType)}>Aplicar Sort </div> */}
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-8 justify-items-center animate__animated animate__fadeIn animate__faster">
              {students.map((student) => {
                return (
                  <StudentCard key={student.studentId} student={student} />
                );
              })}
            </div>
          </div>
        ) : (
          <NoContent />
        )}
      </main>
    </>
  );
};

export default StudentsPage;
