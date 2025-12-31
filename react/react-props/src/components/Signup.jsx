import React from 'react'
import Input from './from/Input'
import Button from './from/Button'

const Signup = () => {
    return (
        <div className="bg-gray-50 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>
            <form className="flex flex-col space-y-4">
                <Input type="text" placeholder="Full Name"/>
                <Input type="email" placeholder="Email"/>              
                
                <div class="flex items-center space-x-4">
                    <span class="w-20 text-gray-700 font-medium">Gender</span>
                    <div class="flex space-x-2">

                        <label class="relative cursor-pointer px-4 py-2 rounded border bg-white text-gray-700 border-gray-300 hover:bg-blue-100 flex items-center">
                            <input type="radio" name="gender" value="male" class="absolute opacity-0 peer" />
                            <span class="w-4 h-4 mr-2 rounded-full border border-gray-400 flex-shrink-0
                           peer-checked:bg-blue-600 peer-checked:border-blue-600"></span>
                            Male
                        </label>

                        <label class="relative cursor-pointer px-4 py-2 rounded border bg-white text-gray-700 border-gray-300 hover:bg-blue-100 flex items-center">
                            <input type="radio" name="gender" value="female" class="absolute opacity-0 peer" />
                            <span class="w-4 h-4 mr-2 rounded-full border border-gray-400 flex-shrink-0
                           peer-checked:bg-blue-600 peer-checked:border-blue-600"></span>
                            Female
                        </label>

                    </div>
                </div>
                 <Input type="tel" placeholder="Phone Number"/>

                <div className="flex space-x-4 mt-2">
                    <Button type="submit" text="Sign Up" bgColor="bg-blue-600" textColor="text-white" ovBgcolor ="bg-blue-700"/>                    
                    <Button type="button" text="Cancel" bgColor="bg-gray-300" textColor="text-gray-700" ovBgcolor ="bg-gray-400"/>          
                   
                </div>
            </form>
        </div>
    )
}

export default Signup
