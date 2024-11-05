// src/App.js
import React from "react";
import Button from "./Button.jsx";
import Singlecard from "./Singlecard.jsx";
import {cardsData} from './dummyData/dummyData.js';

function Cards() {
  return (
    <div className="min-h-screen flex  items-center justify-center bg-gray-100 px-5 py-11">
      <div className="w-full max-w-6xl gap-9 flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0 md:space-x-4">
        {cardsData.map((card)=>(

         
          <Singlecard key={card.id}
          image={card.img}
            title={card.title}
            send={card.desc}
            user={card.usersAllowed}
            storage={card.storage}
            price={card.price}
            isSpecial={card.title === 'Partnerships'}
          />
        
        ))}
        
        {/* <div className="flex-1  md:scale-110">
          <Singlecard
            title="Partnership"
         
            content="This is the first card."
            send="send up to 2GB"
            user="1 user Allowed"
            storage="500 GB Storage"
            price="$150"
          />
        </div>
        <div className="flex-1">
          <Singlecard  
           title="Single User"
           content="This is the first card."
           send="send up to 2GB"
           user="1 user Allowed"
           storage="500 GB Storage"
           price="$150"/>
        </div> */}
      </div>
    </div>
  );
}

export default Cards;
