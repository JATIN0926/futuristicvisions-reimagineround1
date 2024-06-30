
import React from 'react';

const BentoBox = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default BentoBox;
