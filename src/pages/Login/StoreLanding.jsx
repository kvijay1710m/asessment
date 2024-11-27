import React from 'react'
import { Link } from "react-router-dom";
import background from "../../assets/images/loginbg1.png";
import logo from "../../assets/images/storeLogo.png";

const StoreLanding = () => {
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
              <img src={logo} alt="Logo" className="w-[215px] h-[167.27px]" />
            </div>
            <div className="sm:p-10 ">
              <h1 className="font-inter mb-3  sm:w-[327px] sm:h-[78px] text-[32px] font-[700] leading-[38.73px] text-gray-800 ">
                No stores are linked to this account
              </h1>

              <p className=" font-inter text-[14px] leading-[21.78px]  sm:w-[305px] sm:h-[30px] text-gray-600 ">
                Enter your account details correctly or register your store with
                us
              </p>
            </div>

            {/* Buttons */}
            <div className="space-y-2">
              <Link to="/selectstore">
                <button className="w-full bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white py-2 rounded-md hover:from-[#55800F] hover:to-[#98B537]">
                  Register your Store with us
                </button>
              </Link>
              <div className=" rounded-md bg-gradient-to-r from-[#668D12] to-[#ACC43F] p-[1px]">
                <button className="w-full bg-white text-[#668D12] font-semibold py-2 px-4 rounded-md ">
                  Login with different account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreLanding
