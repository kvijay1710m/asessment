import React from 'react'

import background from "../../assets/images/loginbg1.png";
import logo from "../../assets/images/logo1.png";


const Login = () => {
  return (
    <div>
      <div
        className="relative h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-85"></div>
        {/* card  */}

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 text-center">
            {/* Logo */}
            <div className="flex justify-center mb-3 sm:mb-0 ">
              <img src={logo} alt="Logo" className="w-[90px] h-[90px]" />
            </div>
            <div className="sm:p-8 ">
              <h1 className="font-inter mb-3  sm:w-[327px] sm:h-[78px] text-[32px] font-[700] leading-[38.73px] text-gray-800 ">
                Get Started with Rewardify
              </h1>

              <p className=" font-inter text-[14px] leading-[21.78px]  sm:w-[305px] sm:h-[30px] text-gray-600 ">
                Enter your mobile number or Shop ID to get Started
              </p>
            </div>
            <div className=''>
              <input
                type="text"
                className=" mb-5 w-full border-2 p-3 border-gray-300 outline-0 "
                placeholder="Enter Shop ID /Mobile Number"
              />
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <div className=" rounded-md bg-gray-200 p-[1px]">
                <button className="w-full text-gray-700  font-semibold py-2 px-4 rounded-md ">
                  Send OTP
                </button>
              </div>
            </div>

            <p className="text-[14px] font-inter leading-[16.94px]  text-gray-400 mt-4">
              By clicking, you agree to our{" "}
              <a href="#" className="text-black">
                Terms & Condition
              </a>{" "}
              and{" "}
              <a href="#" className="text-black">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login
