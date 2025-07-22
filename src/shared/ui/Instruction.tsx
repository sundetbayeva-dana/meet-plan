import React from "react";
interface InstructionProps extends React.HTMLAttributes<HTMLDListElement> {
  listType?: 'unordered' | 'ordered'
}

export const Instruction:React.FC<InstructionProps>  = ({listType = 'unordered', children, className = '', ...props}) => {
  const tag = listType === 'unordered' ? 'ul' : 'ol' as keyof React.JSX.IntrinsicElements
  return React.createElement(tag, { className: `list-decimal list-inside ${className}`, ...props }, children)
}
export const InstructionItem = ({children}) => {
  return (
    <li>{children}</li>
  )
}

