import React from "react";



export const Card:React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({children, className}) => {
  return (
    <div className={"p-2 rounded-md bg-slate-300" + ' ' + className}>
      {children}
    </div>
  )
}
