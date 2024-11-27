import React from "react";

const MyOrder = ({
  orderId = "12345",
  date = "Apr 09, 2024",
  customerName = "Aanath Kumar",
  phone = "+91 8526547512",
  address = "Paalai, Tirunelveli",
  orderItems = [
    { name: "Orange", quantity: 12, price: 100 },
    { name: "Water Melon", quantity: 5, price: 50 },
  ],
  totalAmount = 120,
  paymentStatus = "PAID - UPI",
  onConfirm,
  onReject,
}) => {
  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md rounded-md">
      {/* Order ID and Date */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xs font-bold text-gray-800">
          Order Id: <span className="text-green-600">{orderId}</span>
        </h2>
        <p className="text-gray-500 text-sm">Date: {date}</p>
      </div>

      {/* Customer Details */}
      <div className="border-t pt-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Order for:</h3>
        <p className="text-gray-800 font-medium">{customerName}</p>
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
          <span role="img" aria-label="Phone">📞</span>
          <a href={`tel:${phone}`} className="text-blue-500 hover:underline">
            {phone}
          </a>
        </div>
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
          <span role="img" aria-label="Address">📍</span>
          <p>{address}</p>
        </div>
      </div>

      {/* Order Items */}
      <div className="border-t pt-2 mt-2">
        <h4 className="text-sm font-semibold text-gray-700 mb-1">Order Items:</h4>
        <ul className="text-sm text-gray-600">
          {orderItems.map((item, index) => (
            <li key={index}>
              {item.quantity} x {item.name} - ₹{item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm font-semibold">Total Bill Amount:</p>
          <p className="text-sm text-gray-800">₹{totalAmount.toFixed(2)}</p>
        </div>
        <div className="mt-1">
          <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full">
            {paymentStatus}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="border-t pt-4 mt-4 flex space-x-4">
        {/* Reject Order Button */}
        <div className="flex-grow">
          <button
            className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition"
            onClick={onReject}
            aria-label="Reject Order"
          >
            Reject Order
          </button>
        </div>

        {/* Confirm Order Button */}
        <div className="flex-grow">
          <button
            className="w-full bg-gradient-to-r from-[#668D12] to-[#ACC43F] text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition"
            onClick={onConfirm}
            aria-label="Confirm Order"
          >
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
