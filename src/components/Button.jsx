import React from 'react'

const Button = ({isSpecial, text, isWidth}) => {
  return (
    <button class={`${isSpecial ?"text-[#00d59a] bg-[#000300] hover:bg-[#0e2c0e] " :" bg-[#00d59a] text-[#000300]"}  my-5 hover:bg-[#02ab7b] ${text === 'Notify Me' ? 'w-[200px] m-4' : ''} text-sm py-2 px-7 rounded`}>
         {text}
        </button>
  )
}

export default Button