import React from 'react'

const Description = () => {
  return (
    <div className="m-16 items-center justify-center h-screen">
       <h4 className="font-bold text-2xl text-indigo-700">Random Score Cards App</h4>
      <p className="mt-2  text-xl text-pretty  text-gray-700"> <span className="font-bold">Description: </span>The Random Score Cards App is an interactive web application that generates a random score (between 0–10)
         when the user clicks a button. The app displays a score in the center of the screen and we have 8 cards, each showing a random number between 0 and 10. 
         The color of the cards changes based on the values, with higher numbers (8–10) displayed in green, mid-range numbers (5–7) in yellow, and lower numbers (0–4) in red. 
         The user can generate new scores and observe how the cards change, making it a visually engaging experience.
      </p>
      <h4 className="font-bold text-2xl text-indigo-700 mt-4">How to Use:</h4>
      <ul className="mt-2 p-2 text-xl text-pretty list-decimal text-gray-700">
        <li className="ml-4">Upon loading the app, the user will see a Generate button located at the top left of the screen.</li>
        <li className="ml-4">Clicking the Generate button will trigger the app to randomly generate a number between 0 and 10 and display it in a large font at the center of the screen.</li>
        <li className="ml-4">Below the score, 8 cards will be displayed, each showing a random number between 0 and 10. The color of each card will adjust based on its value (red for low, yellow for medium, green for high).</li>
        <li className="ml-4">The user can click the Generate button again to refresh the score and the cards, creating a new, dynamic set of numbers.</li>
      </ul>
      <h4 className="font-bold text-2xl text-indigo-700 mt-4">Technology Stack:</h4>
      <ul className="mt-2 p-2 text-xl text-pretty list-disc  text-gray-700">
      <li className="ml-4">Frontend: React.js for UI components and state management. </li>  
      <li className="ml-4">Styling: Tailwind CSS for clean, responsive, and attractive layouts. </li>  
      <li className="ml-4">Interactive UI: Smooth transitions and hover effects for an engaging user experience.</li>  
    </ul>
    </div>
  )
}

export default Description
