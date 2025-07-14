import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const Heading: React.FC<HeadingProps> = ({
  level = 'h2',
  className,
  children,
  ...props
                                                }) => {
  const Tag = level as keyof React.JSX.IntrinsicElements

  return React.createElement(Tag, { className: "text-3xl font-semibold text-slate-900 mt-1" + ' ' + className, ...props }, children)
}
