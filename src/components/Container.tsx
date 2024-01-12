import React from 'react'

function Container({children, preClassName, className, ...props}:
  {
    children: React.ReactElement
    preClassName?: string
    className?: string
  }) {
  return (
    <div className={`pre-container ${preClassName}`}>
        <div {...props} className={`container ${className}`}>
            {children}
        </div>
    </div>
  )
}

export default Container