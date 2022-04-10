import React from "react";

const StudentCard = () => {

    const estaincrito = true;
  return (
    <>
      <div className="h-64 w-64 bg-green-200 rounded-md">
        <div className="flex flex-col h-full justify-items-center">
          <p className="text-center text-lg font-semibold mt-2">denlkdene</p>
          <div className="flex items-center m-2">
            <p>Boleta: </p>
            <span className="text-left text-md">lkndwlendwlekdn</span>
          </div>
          <div className="flex items-center m-2">
            <p>Nombre: </p>
            <span className="text-left text-md">lkndwlendwlekdn</span>
          </div>
          <div className="flex items-center m-2">
            <p>Carrera: </p>
            <span className="text-left text-md">lkndwlendwlekdn</span>
          </div>
          <div className="flex items-center m-2">
            <p>Actualmente esta inscrito? </p>
            <div className={
                !estaincrito ?
                "ml-6 h-6 w-6 bg-red-400 rounded-full"
                :
                "ml-6 h-6 w-6 bg-green-400 rounded-full"
                }></div>
          </div>          
          <div className="flex justify-end p-2">
            <div className="text-center p-2 w-24 bg-green-300 hover:bg-green-400 transition ease-in-out cursor-pointer rounded">
              Ver más
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentCard;
