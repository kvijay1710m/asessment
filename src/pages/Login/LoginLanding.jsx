import React from 'react'
import { Link } from 'react-router-dom'
import background from "../../assets/images/loginbg1.png"; 
import logo from "../../assets/images/logo1.png"

const LoginLanding = () => {
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
                Grow your Business Exponentially!
              </h1>

              <p className=" font-inter font-[18px] leading-[21.78px]  sm:w-[305px] sm:h-[30px] text-gray-600 mb-5 ">
                Pay less on each transaction you make with our App.
              </p>
            </div>

            <div className="flex justify-center space-x-2 mb-6">
              <span className="w-3 h-3 bg-gray-800 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
              <span className="w-3 h-3 bg-gray-200 rounded-full"></span>
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <Link to="/login">
                <button className="w-full bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white py-2 rounded-md hover:from-[#55800F] hover:to-[#98B537]">
                  Login
                </button>
              </Link>
              <div className=" rounded-md bg-gradient-to-r from-[#668D12] to-[#ACC43F] p-[1px]">
                <button className="w-full bg-white text-[#668D12] font-semibold py-2 px-4 rounded-md ">
                  Contact Us
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
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginLanding
