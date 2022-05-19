import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div className="flex mt-6 justify-center h-screen">
      <div className="flex flex-col p-4 border-2 self-center w-5/6 sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-2/5 2xl:w-2/5 rounded-md">
        <h4 className="text-center mt-2 mb-6 sm:mb-4 text-lg font-semibold">
          Registrarse
        </h4>

        <span className="text-md">Nombre(s)</span>
        <input
          className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
          type="text"
        />

        <span className="text-md">Apellidos</span>
        <input
          className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
          type="text"
        />

        <span className="text-md">Nombre de Usuario</span>
        <input
          className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
          type="text"
        />

        <span className="text-md">Contraseña</span>
        <input
          className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
          type="password"
        />

        <span className="text-md">Confirmar Contraseña</span>
        <input
          className="rounded-md p-2 border-2 border-slate-400 transition ease-in-out duration-300 focus:outline-none focus:border-2 focus:border-slate-500 w-full mb-4"
          type="password"
        />

        <div className="flex justify-end">
          <div className="p-3 bg-green-200 transition ease-in-out duration-300 hover:bg-green-300 rounded-md text-sm font-semibold cursor-pointer">
            Registrarse
          </div>
        </div>

        <div className="flex flex-col w-full items-center mt-2">
          <span className="text-md">¿Ya tienes una cuenta?</span>
          <Link className="mt-1" to={"/login"}>
            <span className="font-semibold">Iniciar Sesión</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
