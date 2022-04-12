import React, { useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";
// import { useLocation } from "react-router-dom";
// import axios from "axios";
import { useForm } from "../hooks/useForm";

const StudentPage = () => {
  // const location = useLocation();
  // const studentId = location.pathname.split("/")[2];
  // const [product, setProduct] = useState({});
  const [modifying, setModifying] = useState(false);

  const [formValues, handleInputChange] = useForm({
    boleta: "",
    nombre: "",
    apellidos: "",
    correo: "",
  });

  const { boleta, nombre, apellidos, correo } = formValues;

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const product = await axios.get(
  //         // `https://us-east-1.aws.data.mongodb-api.com/app/olympus-oocpc/endpoint/api/products/find?id=${studentId}`
  //       );
  //       setProduct(product.data);
  //     } catch (error) {
  //       console.log("Error en obtener alumno");
  //     }
  //   };
  //   getProduct();
  // }, [studentId]);

  const estaincrito = true;
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />
        <div className="flex flex-col mt-2 mr-6 w-5/6 h-screen border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          <div className="flex flex-col p-6 w-full items-center">
            <div className="flex flex-col p-24 bg-gradient-to-r from-gray-100 via-gray-100/50 to-gray-200 border-2 border-slate-200 rounded-md">
              {modifying ? (
                <>
                  <div className="animate__animated animate__fadeIn animate__faster">
                    <h4 className="text-2xl font-bold mb-4 text-center">
                      Modificar Datos
                    </h4>
                    <div className="mb-4 items-center flex text-xl ">
                      <span className="w-24 font-semibold">Boleta: </span>
                      <input
                        className="ml-2 p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700"
                        type="text"
                        name="boleta"
                        value={boleta}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-4 items-center flex text-xl ">
                      <span className="w-24 font-semibold">Nombre: </span>
                      <input
                        className="ml-2 p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700"
                        type="text"
                        name="nombre"
                        value={nombre}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-4 items-center flex text-xl ">
                      <span className="w-24 font-semibold">Apellidos: </span>
                      <input
                        className="ml-2 p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700"
                        type="text"
                        name="apellidos"
                        value={apellidos}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="mb-4 items-center flex text-xl ">
                      <span className="w-16 font-semibold">Correo: </span>
                      <input
                        className="ml-10 p-2 rounded-md border-2 border-green-500 focus:outline-none focus:border-2 focus:border-green-700"
                        type="text"
                        name="correo"
                        value={correo}
                        onChange={handleInputChange}
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
                        onClick={() => console.log("confirmar")}
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
                        2019602194
                      </span>
                    </div>

                    <div className="flex text-xl">
                      <span className="w-24 font-semibold">Nombre: </span>
                      <span className="font-semibold ml-2 mb-4">
                        Felix Enrique
                      </span>
                    </div>

                    <div className="flex text-xl">
                      <span className="w-24 font-semibold">Apellidos: </span>
                      <span className="font-semibold ml-2 mb-4">
                        Vega Nolasco
                      </span>
                    </div>

                    <div className="flex text-xl">
                      <span className="w-16 font-semibold">Carrera: </span>
                      <span className="font-semibold ml-10 mb-4">
                        Ingeniería en Informática
                      </span>
                    </div>

                    <div className="flex text-xl">
                      <span className="w-16 font-semibold">Plantel: </span>
                      <span className="font-semibold ml-10 mb-4">UPIICSA</span>
                    </div>

                    <div className="flex text-xl">
                      <span className="w-16 font-semibold">Correo: </span>
                      <span className="font-semibold ml-10 mb-4">
                        felixvnolasco@gmail.com
                      </span>
                    </div>

                    <div className="flex text-xl items-center mt-4 mb-6">
                      <p className="font-semibold">
                        Actualmente esta inscrito?
                      </p>
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
                      <div className="ml-6 p-4 w-24 text-center font-semibold items-center bg-red-400 hover:bg-red-500 hover:bg-green rounded-md cursor-pointer">
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

      <Footer />
    </>
  );
};

export default StudentPage;
