import React from 'react'

const Input = ({type,placeholder}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            className="bg-white p-3 border border-gray-300 rounded text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
    )
}

export default Input
