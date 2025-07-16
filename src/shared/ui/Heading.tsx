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
  const getTextParams = (level) => {
    switch (level) {
      case 'h1':
        return 'text-3xl font-semibold'
      case 'h2':
        return 'text-xl font-medium'
      case 'h3':
      case 'h4':
      case 'h5':
      case 'h6':
        return 'text-base font-medium'
    }
  }
  const Tag = level as keyof React.JSX.IntrinsicElements
  const textSize = getTextParams(level)

  return React.createElement(Tag, { className: `${textSize} text-slate-900 mt-1` + ' ' + className, ...props }, children)
}
