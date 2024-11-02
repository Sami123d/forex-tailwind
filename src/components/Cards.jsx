// src/App.js
import React from 'react';

function Card({ title, content, price }) {
  return (
    
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transform transition duration-300 hover:scale-105">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <h1 className='text-2xl font-bold my-5 border-b-2'>{price}</h1>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

function Cards() {
    return (
        <div className=" flex flex-col items-center justify-center bg-gray-100 p-4">
          <div className="w-full max-w-6xl gap-4 flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <Card title="Single User" content="This is the first card." price="$150"/>
            </div>
            <div className="flex-1  md:scale-110">
              <Card title="Partnership" content="This is the second card. It is elevated." />
            </div>
            <div className="flex-1">
              <Card title="Group Content" content="This is the third card." />
            </div>
          </div>
        </div>
      );
}

export default Cards;
