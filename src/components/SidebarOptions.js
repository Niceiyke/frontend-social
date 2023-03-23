import React from 'react'

export const SidebarOptions = ({Icon,text}) => {
  return (
    <div className="flex items-center cursor-pointer hover:text-main hover:rounded-3xl hover:bg-gray-100 hover:transition-colors ease-in-out delay-200 active:bg-violet-700">
      <Icon className="text-5xl"/>
      <h2 className="p-5 font-semibold text-2xl mr-5 hidden md:block">{text} </h2>
    </div>
  );
}
