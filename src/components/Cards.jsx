// src/App.js
import React from "react";
import Singlecard from "./Singlecard.jsx";
import { cardsData } from "./dummyData/dummyData.js";

function Cards() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-5 py-11 mt-24">
      {/* Add mt-24 to add space for the navbar */}
      <div className="w-full max-w-6xl gap-9 flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
        {cardsData.map((card) => (
          <Singlecard
            key={card.id}
            image={card.img}
            title={card.title}
            send={card.desc}
            user={card.usersAllowed}
            storage={card.storage}
            price={card.price}
            isSpecial={card.title === 'Partnerships'}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
