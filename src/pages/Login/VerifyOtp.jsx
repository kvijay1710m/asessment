import React from 'react'
import background from "../../assets/images/loginbg1.png";
import logo from "../../assets/images/logo1.png";


const VerifyOtp = () => {
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
            <div className="sm:p-10 ">
              <h1 className="font-inter sm:w-[286px] sm:h-[39px] text-[32px] font-[700] leading-[38.73px] text-gray-800 ">
                Verify your details
              </h1>

              <p className=" font-inter text-[14px] leading-[21.78px]  sm:w-[305px] sm:h-[10px] text-gray-600 ">
                Enter OTP number below
              </p>
            </div>
            <div className="flex justify-center space-x-2  mt-3 mb-20">
              <input
                type="password"
                maxLength="1"
                className=" mb-5 w-[60px] rounded-lg  border-2 p-3 border-gray-300 outline-0 focus:ring-1 focus:ring-green-500 "
              />
              <input
                type="password"
                maxLength="1"
                className=" mb-5 w-[60px] rounded-lg  border-2 p-3 border-gray-300 outline-0 focus:ring-1 focus:ring-green-500 "
              />
              <input
                type="password"
                maxLength="1"
                className=" mb-5 w-[60px] rounded-lg  border-2 p-3 border-gray-300 outline-0  focus:ring-1 focus:ring-green-500"
              />
              <input
                type="password"
                maxLength="1"
                className=" mb-5 w-[60px] rounded-lg  border-2 p-3 border-gray-300 outline-0 focus:ring-1 focus:ring-green-500 "
              />
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <div className=" rounded-md bg-gray-200 p-[1px]">
                <button className="w-full text-gray-500  font-semibold py-2 px-4 rounded-md ">
                  verify and Continue
                </button>
              </div>
            </div>

            <p className="text-[14px] font-inter leading-[16.94px]  text-gray-400 mt-4">
              Didn’t receive OTP? Resend in 0:55
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp
