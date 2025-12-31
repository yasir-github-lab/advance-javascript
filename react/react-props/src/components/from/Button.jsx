import React from 'react'

const Button = ({type, text,bgColor,textColor,ovBgcolor}) => {
    return (
        <button
            type={type || 'button'}
            className={`flex-1 ${bgColor || 'bg-gray-300'} ${textColor || 'text-gray-700'} font-bold py-3 rounded hover:${ovBgcolor || 'bg-gray-400'} transition`}
        >
            {text}
        </button>
    )
}

export default Button
