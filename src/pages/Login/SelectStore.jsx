import React, { useState } from "react";
import background from "../../assets/images/loginbg1.png";
import store1 from "../../assets/images/store1.png";
import store2 from "../../assets/images/store2.png"; 

const SelectStore = () => {
    
  const [selectedStore, setSelectedStore] = useState(null);

  const stores = [
    {
      id: 12345,
      name: "Annapoorna Hotel",
      location: "Sitra, Coimbatore",
      image: store1,
    },
    {
      id: 22345,
      name: "Annapoorna Hotel",
      location: "L&T, Coimbatore",
      image: store2, 
    },
  ];

  const handleSelect = (id) => {
    setSelectedStore(id);
  };

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
            <div className="sm:p-8 ">
              <h1 className="font-inter mb-3  sm:w-[327px] sm:h-[40px] text-[32px] font-[700] leading-[38.73px] text-gray-800 ">
                Select Your Store
              </h1>

              <p className=" font-inter text-[14px] leading-[21.78px]  sm:w-[305px] sm:h-[30px] text-gray-600 ">
                Your Number is connect with 2 stores
              </p>
            </div>

            {/* .......................................stores......................................... */}
            <div className="p-4">
              {stores.map((store) => (
                <div
                  key={store.id}
                  className={`flex items-center gap-4 p-4 mb-4 border rounded-lg ${
                    selectedStore === store.id
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                >
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold">{store.name}</h3>
                    <p className="text-sm text-gray-500">{store.location}</p>
                    <p className="text-sm text-gray-500">
                      Store ID: {store.id}
                    </p>
                  </div>
                  <input
                    type="radio"
                    name="store"
                    className="w-5 h-5 text-black "
                    checked={selectedStore === store.id}
                    onChange={() => handleSelect(store.id)}
                  />
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="space-y-4">
              <div className=" rounded-md bg-gray-200 p-[1px]">
                <button className="w-full bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white py-2 rounded-md hover:from-[#55800F] hover:to-[#98B537]">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectStore;
