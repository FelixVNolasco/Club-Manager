import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FaAngleLeft } from "react-icons/fa";
import { useForm } from "../hooks/useForm";
import { Sidebar } from "../Components/Sidebar";

export const ClubPage = () => {
  const location = useLocation();
  const MySwal = withReactContent(Swal);
  const studentId = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const [student, setStudent] = useState({});
  const estaincrito = student.signedUp;
  const [modifying, setModifying] = useState(false);

  useEffect(() => {
    const getStudent = async () => {
      try {
        const students = await axios.get(
          `http://localhost:5000/clubs/${studentId}`
        );
        setStudent(students.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No ha sido posible ver la informacion del estudiante",
          didOpen: () => {
            navigate("/");
          },
        });
        // console.log(error);
      }
    };
    getStudent();
  }, [studentId, navigate]);

  const [formValues, handleInputChange] = useForm({
    boleta: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const { boleta, firstName, lastName, email } = formValues;

  const [errors, setErrors] = useState("");

  const isFormValid = () => {
    if (validator.isEmpty(boleta) || !validator.isNumeric(boleta)) {
      setErrors(
        "El campo boleta es obligatorio y solo debe de contener numeros"
      );
      return false;
    } else if (validator.isEmpty(firstName)) {
      setErrors("El campo Nombre es obligatorio");
      return false;
    } else if (validator.isEmpty(lastName)) {
      setErrors("El campo Apellido es obligatorio");
      return false;
    } else if (!validator.isEmail(email)) {
      setErrors("El campo Correo es obligatorio y no es un email");
      return false;
    }
    setErrors("");
    return true;
  };

  const UpdateClub = async () => {
    try {
      if (isFormValid()) {
        await axios.put(`http://localhost:5000/clubs/${studentId}`, formValues);
        MySwal.fire({
          icon: "success",
          title: "Actualizado Correctamente",
          text: "Se ha actualizado correctamente",
          didOpen: () => {
            navigate("/");
          },
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No ha sido posible actualizar el club",
        didOpen: () => {
          navigate("/");
        },
      });
    }
  };

  const DeleteClub = async () => {
    try {
      await axios.delete(`http://localhost:5000/clubs/${studentId}`);
      MySwal.fire({
        icon: "success",
        title: "Eliminado Correctamente",
        text: "Se ha eliminado correctamente",
        didOpen: () => {
          navigate("/");
        },
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "No ha sido posible eliminar el club",
        didOpen: () => {
          navigate("/");
        },
      });
    }
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col mt-6 m-auto sm:mt-6 sm:m-auto md:mt-6 md:m-auto lg:mt-6 lg:m-auto xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 w-5/6 h-full 2xl:h-screen sm:border-slate-400 border-0 sm:border-2 rounded-lg drop-shadow-lg sm:shadow-sm shadow-slate-500 p-10">
        <Link
          className="xl:hidden flex p-2 bg-yellow-200 hover:bg-yellow-300 justify-center items-center font-semibold cursor-pointer rounded-md mb-2"
          to="/"
        >
          <FaAngleLeft />
          <span>Regresar</span>
        </Link>
        <div className="flex flex-col p-6 w-full items-center">
          {errors !== "" && (
            <h5 className="w-full p-2 m-2 text-center font-semibold bg-red-200 rounded-md animate__animated animate__headShake animate__faster">
              {errors}
            </h5>
          )}
          <div className="flex flex-col p-6 sm:p-16 md:p-16 lg:p-16 xl:p-24 2xl:p-24 bg-gradient-to-r from-gray-100 via-gray-100/50 to-gray-200 border-2 border-slate-200 rounded-md">
            {modifying ? (
              <>
                <div className="mb-12 animate__animated animate__fadeIn animate__faster">
                  <h5 className="text-2xl font-bold mb-4 text-center">
                    Modificar Datos
                  </h5>

                  <div className="mb-4 items-center flex text-xl ">
                    <span className="w-24 font-semibold">Boleta: </span>
                    <input
                      className="ml-2 p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700"
                      type="text"
                      name="boleta"
                      value={boleta}
                      onChange={handleInputChange}
                      placeholder={student.boleta}
                    />
                  </div>

                  <div className="mb-4 items-center flex text-xl ">
                    <span className="w-24 font-semibold">Nombre: </span>
                    <input
                      className="ml-2 p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700"
                      type="text"
                      name="firstName"
                      value={firstName}
                      onChange={handleInputChange}
                      placeholder={student.firstName}
                    />
                  </div>

                  <div className="mb-4 items-center flex text-xl ">
                    <span className="w-24 font-semibold">Apellidos: </span>
                    <input
                      className="ml-2 p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700"
                      type="text"
                      name="lastName"
                      value={lastName}
                      onChange={handleInputChange}
                      placeholder={student.lastName}
                    />
                  </div>

                  <div className="mb-4 items-center flex text-xl ">
                    <span className="w-16 font-semibold">Correo: </span>
                    <input
                      className="ml-10 p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700"
                      type="text"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      placeholder={student.email}
                    />
                  </div>

                  <div className="flex justify-end p-2">
                    <div
                      className="p-4 text-center font-semibold items-center bg-red-400 hover:bg-red-500 hover:bg-green rounded-md cursor-pointer"
                      onClick={() => setModifying(!modifying)}
                    >
                      Cancelar
                    </div>
                    <div
                      className="ml-6 p-4 text-center font-semibold items-center bg-green-400 hover:bg-green-500 hover:bg-green rounded-md cursor-pointer"
                      onClick={UpdateClub}
                    >
                      Confirmar
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="animate__animated animate__fadeInDown animate__faster">
                  <h4 className="text-2xl font-bold mb-4 text-center">
                    Datos del alumno
                  </h4>
                  <div className="flex text-xl">
                    <span className="w-24 font-semibold">Boleta: </span>
                    <span className="font-semibold ml-2 mb-4">
                      {student.boleta}
                    </span>
                  </div>

                  <div className="flex text-xl">
                    <span className="w-24 font-semibold">Nombre: </span>
                    <span className="font-semibold ml-2 mb-4">
                      {student.firstName}
                    </span>
                  </div>

                  <div className="flex text-xl">
                    <span className="w-24 font-semibold">Apellidos: </span>
                    <span className="font-semibold ml-2 mb-4">
                      {student.lastName}
                    </span>
                  </div>

                  <div className="flex text-xl">
                    <span className="w-16 font-semibold">Carrera: </span>
                    <span className="font-semibold ml-10 mb-4">
                      {student.career}
                    </span>
                  </div>

                  <div className="flex text-xl">
                    <span className="w-16 font-semibold">Plantel: </span>
                    <span className="font-semibold ml-10 mb-4">
                      {student.school}
                    </span>
                  </div>

                  <div className="flex text-xl">
                    <span className="w-16 font-semibold">Correo: </span>
                    <span className="font-semibold ml-10 mb-4">
                      {student.email}
                    </span>
                  </div>

                  <div className="flex text-xl items-center mt-4 mb-6">
                    <p className="font-semibold">Actualmente esta inscrito?</p>
                    <div
                      className={
                        !estaincrito
                          ? "ml-6 h-4 w-4 bg-red-400 rounded-full"
                          : "ml-6 h-4 w-4 bg-green-400 rounded-full"
                      }
                    ></div>
                  </div>

                  <div className="flex justify-end p-2">
                    <div
                      className="p-4 w-24 text-center font-semibold items-center bg-yellow-400 hover:bg-yellow-500 hover:bg-green rounded-md cursor-pointer"
                      onClick={() => setModifying(!modifying)}
                    >
                      Modificar
                    </div>
                    <div
                      className="ml-6 p-4 w-24 text-center font-semibold items-center bg-red-400 hover:bg-red-500 hover:bg-green rounded-md cursor-pointer"
                      onClick={DeleteClub}
                    >
                      Eliminar
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
