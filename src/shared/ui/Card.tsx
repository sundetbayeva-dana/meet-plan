import React from "react";

export const Card:React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({children, className}) => {
  return (
    <div className={"flex flex-col p-2 rounded-md bg-slate-300" + ' ' + className}>
      {children}
    </div>
  )
}
