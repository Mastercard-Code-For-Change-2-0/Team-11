import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="flex flex-row bg-white rounded-xl shadow-md p-6 items-center mb-8">
      <div className="w-28 h-28 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-lg font-semibold">
        Photo
      </div>
      <div className="flex flex-col flex-1 justify-between px-6">
        <p className="text-xl font-semibold text-gray-900">{user.name}</p>
        <p className="text-gray-600">{user.email}</p>
        <p className="text-gray-600">{user.phone}</p>
        <p className="text-gray-600">{user.id}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
