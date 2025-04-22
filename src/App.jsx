import React, { useState } from "react";
import Description from "./components/Description";

const getColor = (score) => {
  if (score >= 8) return "bg-green-500 text-white";
  if (score >= 5) return "bg-yellow-400  text-white";
  return "bg-red-400 text-white";
};

export default function RandomScoreCards() {
  const [score, setScore] = useState(null);
  const [cards, setCards] = useState(Array(8).fill(0));

  const generateScore = () => {
    const newScore = Math.floor(Math.random() * 11);
    setScore(newScore);
    setCards(cards.map(() => Math.floor(Math.random() * 11)));
  };

  return (
    <div className="min-h-screen md:bg-gradient-to-br from-purple-200 to-blue-300 sm:bg-purple-200 p-6 flex flex-col pt-8 items-center">
        <button
          onClick={generateScore}
          className="bg-linear-65 from-purple-500 to-pink-500 mb-6 transform hover:scale-105 text-white text-2xl cursor-pointer  px-6 py-2 rounded-xl shadow-lg transition duration-130"
        >
          Generate Score
        </button>
      
      {score !== null && (
        <div className="text-center text-3xl font-extrabold mb-10 text-indigo-700">
          Random Score
          <span className="m-4">
          {score}
          </span>
          
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {cards.map((cardScore, index) => (
          <div
            key={index}
            className={`transition-all duration-300 transform hover:scale-105 ${getColor(cardScore)} p-6 rounded-2xl cursor-pointer shadow-xl flex justify-center items-center text-3xl font-semibold`}
          >
           {cardScore}
          </div>
        ))}
      </div>
      
     <Description/>

      <div className="mt-auto p-4">
      <footer className="text-center text-gray-700 p-4 mt-auto">
        Design and Devloped by Saifali Dhuka
        <hr/>
       <span className="cursor-pointer ml-2 hover:text-indigo-700" onClick={(e)=>{window.location.href = 'mailto:saifalidhuka@gmail.com'; e.preventDefault();}}> saifalidhuka@gmail.com</span> |<span className="cursor-pointer ml-2 hover:text-indigo-700" onClick={()=>{window.open('https://www.linkedin.com/in/saifalidhuka/', '_blank')}}>LinkedIn:https://www.linkedin.com/in/saifalidhuka/</span>
      </footer>
      </div>  
    </div>
  );
}
