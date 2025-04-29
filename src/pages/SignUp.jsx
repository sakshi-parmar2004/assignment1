import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-[#F7F8F9] flex flex-col justify-between items-center p-6">
            <form className="w-full max-w-md rounded-lg p-8 space-y-6">
                
                    <h1 className="text-2xl font-bold text-[#1D2226] mb-10 font-rubik text-left">Create your PopX account</h1>
                   
                
                {/* {full name} */}
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="absolute -top-3 left-3 bg-[#F7F8F9] text-sm text-[#6C25FF] px-1"
                    >
                       Full Name  <span className='text-red-500'>*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        defaultValue="Marry Doe"
                        className="w-full border border-gray-300 rounded-md px-4 pt-4 pb-2 focus:outline-none focus:border-[#1D2226] bg-transparent"
                        placeholder="Enter email address"
                        required
                    />
                </div>
                {/* phone number */}
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="absolute -top-3 left-3 bg-[#F7F8F9] text-sm text-[#6C25FF] px-1"
                    >
                        Phone Number <span className='text-red-500'>*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        defaultValue="Marry Doe"
                        className="w-full border border-gray-300 rounded-md px-4 pt-4 pb-2 focus:outline-none focus:border-[#1D2226] bg-transparent"
                        placeholder="Enter email address"
                        required
                    />
                </div>
                {/* Email section */}
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="absolute -top-3 left-3 bg-[#F7F8F9] text-sm text-[#6C25FF] px-1"
                    >
                        Email Address <span className='text-red-500'>*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        defaultValue="Marry Doe"
                        className="w-full border border-gray-300 rounded-md px-4 pt-4 pb-2 focus:outline-none focus:border-[#1D2226] bg-transparent"
                        placeholder="Enter email address"
                        required
                    />
                </div>

                {/* Password section */}
                <div className="relative">
                    <label
                        htmlFor="password"
                        className="absolute -top-3 left-3 bg-[#F7F8F9] text-sm text-[#6C25FF] px-1"
                    >
                        Password <span className='text-red-500'>*</span>
                    </label>
                    <input
                        id="password"
                        type="password"
                        defaultValue="Marry Doe"
                        className="w-full border border-gray-300 rounded-md px-4 pt-4 pb-2 focus:outline-none focus:border-[#1D2226] bg-transparent"
                        placeholder="Enter password"
                        required
                    />
                </div>
                {/* Company Name */}
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="absolute -top-3 left-3 bg-[#F7F8F9] text-sm text-[#6C25FF] px-1"
                    >
                        Company Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        defaultValue="Marry Doe"
                        className="w-full border border-gray-300 rounded-md px-4 pt-4 pb-2 focus:outline-none focus:border-[#1D2226] bg-transparent"
                        placeholder="Enter email address"
                        required
                    />
                </div>
                {/* Agency section */}
             <div className='flex flex-col gap-2'>
             <label htmlFor="">Are you an Agency? <span className='text-red-500'>*</span></label>
             <div className='flex gap-2'>
             <input type="radio" name="choice" value="yes" defaultChecked/> Yes
             <input type="radio" name="choice" value="no"/> No
             </div>
             
             </div>
           
                
            </form>
            {/* Button */}
            <button
                    type="button"
                    onClick={() => navigate('/home')}
                    className="w-full max-w-md text-white bg-[#6C25FF] font-semibold py-2 rounded-md cursor-pointer "
                >
                   Create Account
                </button>

            
        </div>
    )
}

export default SignUp
