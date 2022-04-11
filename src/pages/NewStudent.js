import React from "react";
import { Navbar } from "../Components/Navbar";
import { Sidebar } from "../Components/Sidebar";
import { Footer } from "../Components/Footer";

const NewStudent = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="mt-2 mr-6 w-5/6 h-6/6 border-slate-400 border-2 rounded-lg drop-shadow-lg shadow-sm shadow-slate-500 p-10">
          <div className="flex flex-col p-2 border-2 border-slate-400 shadow-slate-500 rounded-md">
            <h5 className="font-semibold text-2xl ml-6 mt-2">
              Agregar un nuevo estudiante
            </h5>

            <div className="flex flex-col">
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Boleta</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 rounded-md"
                  type="text"
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Nombre(s)</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 rounded-md"
                  type="text"
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Apellidos</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500 rounded-md"
                  type="text"
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Correo</span>
                <input
                  className="w-full ml-4 p-2 border-2 border-green-500  focus:border-green-500 rounded-md"
                  type="text"
                />
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Plantel</span>
                <select
                  className="w-full ml-4 p-2 border-2 border-green-500 rounded-md"
                  name=""
                  id=""
                >
                  <option value="UPIICSA">UPIICSA</option>
                  <option value="ESIME">ESIME</option>
                  <option value="UPIITA">UPIITA</option>
                  <option value="ESCOM">ESCOM</option>
                </select>
              </div>
              <div className="flex p-6 items-center">
                <span className="w-24 font-semibold">Actualmente esta inscrito?</span>
                <select
                  className="w-full ml-4 p-2 border-2 border-green-500 rounded-md"
                  name=""
                  id=""
                >
                  <option value="true">Si</option>
                  <option value="false">No</option>
                </select>
              </div>

              <div className="flex justify-end">
                <div className="p-4 w-24 text-center font-semibold items-center bg-green-400 hover:bg-green-500 hover:bg-green rounded-md cursor-pointer">
                  Agregar
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewStudent;
