import React from 'react'
import IconType, { defaultClass } from './icons'
import { twMerge } from 'tailwind-merge'

const Searchicon: React.FC<IconType> = ({ iconStyles, className }) => {
  return (
    <svg className={twMerge(defaultClass, className)} style={iconStyles} data-name="Capa 1" id="Capa_1" viewBox="0 0 20 19.84" xmlns="http://www.w3.org/2000/svg">
      <path strokeWidth={iconStyles?.strokeWidth} stroke={iconStyles?.stroke} d="M16.3,15.42,14.58,14a6.23,6.23,0,0,0,1.54-4.11,6.31,6.31,0,1,0-2.24,4.81l1.8,1.5a.47.47,0,0,0,.31.12.46.46,0,0,0,.37-.18A.48.48,0,0,0,16.3,15.42ZM4.5,9.86a5.32,5.32,0,1,1,5.32,5.32A5.32,5.32,0,0,1,4.5,9.86Z" />
    </svg>
  )
}

export default Searchicon
