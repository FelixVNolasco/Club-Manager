import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validator from "validator";
import { FaAngleLeft } from "react-icons/fa";
import { useForm } from "../hooks/useForm";
import { Sidebar } from "../Components/Sidebar";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const NewStudent = () => {
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)

  const [formValues, handleInputChange] = useForm({
    boleta: "",
    firstName: "",
    lastName: "",
    email: "",
    career: "",
    school: "UPIICSA",
    signedUp: true,
  });
  const { boleta, firstName, lastName, email, career, school, signedUp } =
    formValues;
  // console.log(formValues);

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
    } else if (validator.isEmpty(career)) {
      setErrors("El campo Carrera es obligatorio");
      return false;
    } else if (!validator.isEmail(email)) {
      setErrors("El campo Correo es obligatorio y no es un email");
      return false;
    }
    setErrors("");
    return true;
  };

  const CreateStudent = async () => {
    try {
      if (isFormValid()) {
        await axios.post(`http://localhost:5000/students`, formValues);        
        MySwal.fire({
          icon: 'success',
          title: 'Estudiante Creado',
          text: 'El estudiante se ha creado correctamente',
          didOpen: () => {
            navigate("/");
          }
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No ha sido posible crear el estudiante debido a que ya existe un estudiante con esta boleta',
        didOpen: () => {
          navigate("/student/new");
        }        
      })
    }
  };

  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <div className="mt-2 w-full sm:w-5/6 p-4 sm:m-auto sm:mt-2 sm:p-10 md:m-auto md:mt-2 lg:m-auto lg:mt-2 xl:mt-2 xl:mr-6 2xl:mt-2 2xl:mr-6 h-6/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 animate__animated animate__fadeIn animate__faster">
          <div className="flex flex-col p-2 border-2 border-slate-400 shadow-slate-500 rounded-md">
            <Link
              className="xl:hidden w-1/3 flex p-2 bg-yellow-200 hover:bg-yellow-300 justify-center items-center font-semibold cursor-pointer rounded-md mb-2"
              to="/"
            >
              <FaAngleLeft />
              <span>Regresar</span>
            </Link>
            <h5 className="font-semibold text-center sm:text-left text-2xl ml-6 mt-2">
              Agregar un nuevo estudiante
            </h5>
            {errors !== "" && (
              <h5 className="p-2 m-2 text-center font-semibold bg-red-200 rounded-md animate__animated animate__headShake animate__faster">
                {errors}
              </h5>
            )}
            <div className="flex flex-col">
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Boleta</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="boleta"
                  type="text"
                  onChange={handleInputChange}
                  value={boleta}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Nombre(s)</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="firstName"
                  type="text"
                  onChange={handleInputChange}
                  value={firstName}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Apellidos</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="lastName"
                  type="text"
                  onChange={handleInputChange}
                  value={lastName}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Correo</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="email"
                  type="text"
                  onChange={handleInputChange}
                  value={email}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Carrera</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="career"
                  type="text"
                  onChange={handleInputChange}
                  value={career}
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Plantel</span>
                <select
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="school"
                  id=""
                  onChange={handleInputChange}
                  value={school}
                >
                  <option disabled>Seleccione una opción</option>
                  <option value="UPIICSA" defaultChecked>
                    UPIICSA
                  </option>
                  <option value="ESIME">ESIME</option>
                  <option value="UPIITA">UPIITA</option>
                  <option value="ESCOM">ESCOM</option>
                </select>
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">
                  Actualmente esta inscrito?
                </span>
                <select
                  className="w-full ml-4 p-2 border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700 rounded-md"
                  name="signedUp"
                  id=""
                  onChange={handleInputChange}
                  value={signedUp}
                >
                  <option disabled>Seleccione una opción</option>
                  <option value="true">Si</option>
                  <option value="false" disabled>
                    No
                  </option>
                </select>
              </div>

              <div className="flex justify-end">
                <div
                  className="p-4 w-24 text-center font-semibold items-center bg-green-400 hover:bg-green-500 hover:bg-green rounded-md cursor-pointer"
                  onClick={CreateStudent}
                >
                  Agregar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewStudent;
