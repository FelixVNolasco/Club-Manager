import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";

export const Students = ({ sort }) => {
  const [filteredStudents, setfilteredStudents] = useState([]);
  

  useEffect(() => {
    const getStudents = async () => {
      try {
        const students = await axios.get(`http://localhost:6418/students`);
        setfilteredStudents(students.data);
      } catch (error) {
        console.log("Error en obtener alumno");
      }
    };
    getStudents();
  }, []);

  useEffect(() => {
    if (sort === "newest") {
      setfilteredStudents((prev) =>
        [...prev].sort((a, b) => a.boleta - b.boleta)
      );    
    } else if (sort === "asc") {
      setfilteredStudents((prev) =>
        [...prev].sort((a, b) => a.firstName - b.firstName)
      );
    } else {
      setfilteredStudents((prev) =>
        [...prev].sort((a, b) => b.firstName - a.firstName)
      );
    }
  }, [sort]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-y-8 justify-items-center animate__animated animate__fadeIn animate__faster">
      {filteredStudents.map((student) => {
        return <StudentCard key={student.studentId} student={student} />;
      })}
    </div>
  );
};
