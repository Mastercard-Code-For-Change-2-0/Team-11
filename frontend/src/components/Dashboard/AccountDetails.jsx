import React from "react";

const AccountDetails = ({ user }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800 border-b pb-2 border-gray-200">
          Account Details
        </h3>
        <button
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow transition"
          onClick={() => console.log("Edit Account Details clicked")}
        >
          Edit Details
        </button>
      </div>

      <div>
        <p className="mb-1">
          <span className="font-medium text-gray-700">Account Number:</span>{" "}
          {user.accountNumber}
        </p>
        <p className="mb-1">
          <span className="font-medium text-gray-700">IFSC:</span> {user.ifsc}
        </p>
        <p className="mb-1">
          <span className="font-medium text-gray-700">Balance:</span>{" "}
          {user.balance}
        </p>
        <p>
          <span className="font-medium text-gray-700">Last Transaction:</span>{" "}
          {user.lastTransaction}
        </p>
      </div>
    </div>
  );
};

export default AccountDetails;
