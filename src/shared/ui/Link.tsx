import React from "react";
import { Link , LinkProps } from "react-router";
interface ILink extends LinkProps {
  variant?: string
}

export const CustomLink:React.FC<ILink> = ({to, children, className}) => {
  const variants = {
    default: 'p-2 bg-slate-100 w-fit rounded-sm'
  }

  return (
    <Link to={to} className={`text-sm/6 font-semibold text-gray-900 ${className} ${variants.default}`}>{children}</Link>
  )
}
