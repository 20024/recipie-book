import React from 'react';
import { Link } from 'react-router-dom';  

const Card = ({ details }) => {
  if (!details || details.length === 0) {
    return <p></p>
  }

  return (
    <div className='meals'>
      {details.map((curItem) => (
        <div key={curItem.idMeal} className="meal-card">
          <img 
            src={curItem.strMealThumb} 
            alt={curItem.strMeal} 
            className="meal-image" 
          />
          <p>{curItem.strMeal}</p>
          <Link to={`/meal/${curItem.idMeal}`}> {/* Navigate to MealInfo page with the meal ID */}
            <button className="recipe-button">
              Get Recipe
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Card;


/*<div className="card-container">
      <div className="card">
        <img src={Image} alt="Chicken Biryani" className="card-image" />
        <p>Chicken Biriyani</p>
        <button className="recipe-button">Get Recipe</button>
      </div>
      <div className="card">
        <img src={Image1} alt="Fried Rice" className="card-image" />
        <p>Fried Rice</p>
        <button className="recipe-button">Get Recipe</button>
      </div>
    </div>*/
