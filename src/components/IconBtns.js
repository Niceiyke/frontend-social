import React from 'react'

const IconBtns = ({Icon,isActive,color,children,...props}) => {
  return (
    <button className={` ${isActive ? "flex flex-row text-red-700" : "flex flex-row"}`}>
      <span
        className={`${children != null ? " " : ""} ${color || ""}`}
        {...props}
      >
        <Icon 
        fontSize= 'small'
         color={color}
        
        />
      </span>
      {children}
    </button>
  );
}

export default IconBtns
