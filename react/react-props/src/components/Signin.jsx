
import React from 'react'
import Input from './from/Input'
import Button from './from/Button'

const Signin = () => {
    return (
        <div className="bg-blue-600 text-white p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">Sign In</h2>
            <form className="flex flex-col space-y-4">
                <Input placeholder="Email" type="email"/>
                <Input placeholder="password" type="password"/>
                <Button type="submit" text="Sign In"/>
            </form>
        </div>
    )
}

export default Signin
