import React from 'react'
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen bg-[#F7F8F9] flex justify-center p-6">
        {/* form section */}
            <form className="w-full max-w-md rounded-lg p-8 space-y-6">
                <div className="text-left">
                    <h1 className="text-2xl font-bold text-[#1D2226] mb-2">Sign in to your PopX account</h1>
                    <p className="text-[#1D2226] text-sm opacity-60">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>

                {/* Email section */}
                <div className="relative">
                    <label
                        htmlFor="email"
                        className="absolute -top-3 left-3 bg-[#F7F8F9]  text-sm text-[#6C25FF] px-1"
                    >
                        Email Address
                    </label>
                    <input
                        id="email"
                        type="email"
                        className="w-full border border-gray-300 rounded-md px-4 pt-4 pb-2 focus:outline-none focus:border-[#1D2226] bg-transparent"
                        placeholder="Enter email address"
                        required
                    />
                </div>

                {/* Password section */}
                <div className="relative">
                    <label
                        htmlFor="password"
                        className="absolute -top-3 left-3 bg-[#F7F8F9]  text-sm text-[#6C25FF] px-1"
                    >
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        className="w-full border border-gray-300 rounded-md px-4 pt-4 pb-2 focus:outline-none focus:border-[#1D2226] bg-transparent"
                        placeholder="Enter password"
                        required
                    />
                </div>

                {/* Button */}
                <button
                    type="button"
                    onClick={() => navigate('/home')}
                    className="w-full text-white bg-[#CBCBCB] hover:bg-[#b0b0b0] font-semibold py-2 rounded-md "
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
