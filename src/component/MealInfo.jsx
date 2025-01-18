import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Header.css'

const MealInfo = () => {
  const { id } = useParams();  
  const [meal, setMeal] = useState(null);  

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await response.json();
        setMeal(data.meals[0]); 
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchMealDetails();
  }, [id]);  
  if (!meal) {
    return <p>Loading...</p>;
  }

  return (
    <div className="meal-info">
      <h2>{meal.strMeal}</h2>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
      <h3>Ingredients</h3>
      <ul>
        {Object.keys(meal).map((key) => {
          if (key.startsWith('strIngredient') && meal[key]) {
            return (
              <li key={key}>
                {meal[key]} - {meal[`strMeasure${key.slice(13)}`]}
              </li>
            );
          }
          return null;
        })}
      </ul>
      <h3>Instructions</h3>
      <p>{meal.strInstructions}</p>
    </div>
  );
};

export default MealInfo;
