import React from "react";
import { SidebarItem } from "./SidebarItem";

const dashboardItems = [
  { title: "Ver Alumnos", img: "https://www.svgrepo.com/show/52340/student.svg", path: "/"},
  { title: "Agregar Alumno", img: "https://www.svgrepo.com/show/246367/add-user-add.svg", path: "/student/new"},
];

// const quickMenuItems = [
//   { title: "Ver Clubes", img: "https://www.svgrepo.com/show/69104/books.svg" },
//   { title: "Agregar Club", img: "https://www.svgrepo.com/show/5389/add.svg" },
// ];

export const Sidebar = () => {
  return (
      <div className="hidden md:hidden lg:hidden xl:flex flex-col w-1/6 border-slate-400 border-2 rounded drop-shadow-lg shadow-sm shadow-slate-400 mr-6 mt-2">
        <div className="flex flex-col p-4">
          <h3 className="font-semibold text-xl p-2">Alumnos</h3>
          <ul>
            {dashboardItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div>
        {/* <div className="flex flex-col p-4">
          <h3 className="font-semibold text-xl">Clubes</h3>
          <ul>
            {quickMenuItems.map((item) => {
              return <SidebarItem key={item.title} item={item} />;
            })}
          </ul>
        </div> */}

      </div>
  );
};