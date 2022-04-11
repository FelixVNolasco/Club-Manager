import React from "react";

const StudentCard = () => {

    const estaincrito = true;
  return (
    <>
      <div className="h-64 w-64 bg-blue-200 hover:bg-blue-300 hover:bg-green rounded-md cursor-pointer">
        <div className="flex flex-col h-full justify-items-center">
          <p className="text-center text-lg font-semibold mt-2">denlkdene</p>
          <div className="flex items-center m-2">
            <p className="font-semibold">Boleta: </p>
            <span className="text-left text-md ">lkndwlendwlekdn</span>
          </div>
          <div className="flex items-center m-2">
            <p className="font-semibold">Nombre: </p>
            <span className="text-left text-md">lkndwlendwlekdn</span>
          </div>
          <div className="flex items-center m-2">
            <p className="font-semibold">Carrera: </p>
            <span className="text-left text-md">lkndwlendwlekdn</span>
          </div>
          {/* <div className="flex items-center mt-6 m-2">
            <p className="font-semibold">Actualmente esta inscrito? </p>
            <div className={
                !estaincrito ?
                "ml-6 h-4 w-4 bg-red-400 rounded-full"
                :
                "ml-6 h-4 w-4 bg-green-400 rounded-full"
                }></div>
          </div>           */}
        </div>
      </div>
    </>
  );
};

export default StudentCard;
