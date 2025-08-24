import React from 'react'

const IngredientsLists = ({ingredients, value, handleButtonClick}) => {
    
    
  return (
    <div>
         {ingredients.length > 0 && <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">{value}</ul>
          {ingredients.length >= 4 && <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <button onClick={handleButtonClick}>Get a recipe</button>
          </div>}

        </section>}
        

      
    </div>
  )
}

export default IngredientsLists
