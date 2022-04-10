import React from "react";

export const SidebarItem = ({ item }) => {
  return (
    <>
      <a href={item.path}>
        <li className="font-medium cursor-pointer hover:bg-green-400 transition ease-in-out p-2">
          <div className="flex flex-row justify-between">
            <span>{item.title}</span>
            <img src={item.img} width={24} height={24} alt="" />
          </div>
        </li>
      </a>
    </>
  );
};
