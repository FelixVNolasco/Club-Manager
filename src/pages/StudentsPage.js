import axios from "axios";
import React, { useEffect, useState } from "react";
import { Footer } from "../Components/Footer";
import { MenuItem } from "../Components/MenuItem";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import StudentCard from "../Components/StudentCard";

// const alumnos = [
//   {
//     id: 21037109,
//     boleta: 2019602194,
//     nombres: "Felix Enrique",
//     apellidos: "Vega Nolasco",
//     carrera: "Ingeniería en Informática",
//     plantel: "UPIICSA",
//   },
//   {
//     id: 12039709,
//     boleta: 2019632494,
//     nombres: "Franco Uriel",
//     apellidos: "Perez Mancilla",
//     carrera: "Ingeniería en Robotica",
//     plantel: "UPIITA",
//   },
//   {
//     id: 21037902,
//     boleta: 2019602194,
//     nombres: "Omar",
//     apellidos: "Duran Pineda",
//     carrera: "Ingeniería en Inteligencia Artificial",
//     plantel: "ESCOM",
//   },
//   {
//     id: 23709823,
//     boleta: 2019602194,
//     nombres: "Gabriel",
//     apellidos: "Longinos Juarez",
//     carrera: "Ingeniería Electrica",
//     plantel: "ESIME",
//   },
//   {
//     id: 20398923,
//     boleta: 2019602194,
//     nombres: "Marco Antonio",
//     apellidos: "Lopez Rodriguez",
//     carrera: "Ingeniería en Ciberseguridad",
//     plantel: "ESCOM",
//   },
//   {
//     id: 23979827,
//     boleta: 2019602194,
//     nombres: "Enriqueta",
//     apellidos: "Nolasco Gutierrez",
//     carrera: "Economia",
//     plantel: "ESE",
//   },
//   {
//     id: 29387923,
//     boleta: 2019602194,
//     nombres: "Alan",
//     apellidos: "Betancourt Lopez",
//     carrera: "Videojuegos",
//     plantel: "ESCOM",
//   },
//   {
//     id: 23879812,
//     boleta: 2019602194,
//     nombres: "Jose Luis",
//     apellidos: "Mendez Coria",
//     carrera: "Ingeniería Industrial",
//     plantel: "UPIICSA",
//   },
//   {
//     id: 29387912,
//     boleta: 2019602194,
//     nombres: "Pablo",
//     apellidos: "Ramirez Sanchez",
//     carrera: "Licenciatura en Farmaceutica",
//     plantel: "ESIQUIE",
//   },
// ];

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const students = await axios.get(`http://localhost:6418/students`);
        setStudents(students.data);
      } catch (error) {
        console.log("Error en obtener alumno");
      }
    };
    getProduct();
  }, []);

  return (
    <>
      <Navbar />
      <main className="flex flex-row justify-center">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 h-6/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          <div className="flex mb-6 justify-end">
            <input
              className="p-2 ml-2 border bg-gray-100/30 focus:outline-none focus:border focus:border-gray-300 rounded-lg cursor-pointer"
              type="text"
              placeholder="Buscar..."
            />
            <select
              className="ml-2 p-2 border bg-gray-100/30 hover:bg-gray-100/60 focus:border focus:border-gray-300 cursor-pointer rounded-lg"
              name=""
              id=""
            >
              <option value="">Más recientes</option>
              <option value="">Alfabetico Ascendente</option>
              <option value="">Alfabetico Descendente</option>
            </select>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-y-8 justify-items-center animate__animated animate__fadeIn animate__faster">
            {students.map((student) => {
              return <StudentCard key={student.studentId} student={student} />;
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default StudentsPage;
