import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="flex mt-6 justify-center h-screen">
      <div className="flex flex-col border-2 self-center w-5/6 sm:w-2/3 md:w-2/3 lg:w-3/5 xl:w-3/5 2xl:w-2/5 rounded-md">
        <div className="p-4">
          <h4 className="text-center mt-2 mb-2 text-lg font-semibold">
            Iniciar Sesión
          </h4>

          <span className="text-sm">Nombre de Usuario</span>
          <input
            className="rounded-md p-2 border-2 border-slate-400 w-full mb-4"
            type="text"
          />

          <span className="text-sm">Contraseña</span>
          <input
            className="rounded-md p-2 border-2 border-slate-400 w-full mb-4"
            type="password"
          />

          <div className="flex justify-end">
            <div className="p-2 bg-green-200 rounded-md text-sm font-semibold cursor-pointer">
              Iniciar Sesión
            </div>
          </div>

          <div className="flex flex-col w-full items-center mt-2">
            <span className="text-md">¿Aún no tienes una cuenta?</span>
            <Link to={"/signup"}>
              <span className="font-semibold text-sm">
                Crea una cuenta aquí
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};