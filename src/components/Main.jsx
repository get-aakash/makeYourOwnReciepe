import React from 'react'
import IngredientsLists from './IngredientsLists'
import ClaudeRecipe from './ClaudeRecipe'
import { getRecipeFromChefClaude } from '../ai'

const Main = () => {
  const [ingredients, setIngredients] = React.useState([])
  const [recipeShown, setRecipeShown] = React.useState("")
async function handleButtonClick(){
    const generatedReciepe = await getRecipeFromChefClaude(ingredients)
    setRecipeShown(generatedReciepe)
  }

  const handleOnSubmit = (formData) => {
    const newIngredient = formData.get("ingredient")
    setIngredients([...ingredients, newIngredient])

  }
  
  const value = ingredients.map((ingredient, i) => <li key={i}>{ingredient}</li>)
  return (
    <main>
      <div className="form-wrapper">
        <form action={handleOnSubmit} className='form-ingredient' >
          <input aria-label='Add Ingredient' type="text" placeholder='e.g. oregano' name='ingredient' />
          <button type='submit' >Add Ingredient</button>
        </form>


       <IngredientsLists ingredients={ingredients} value={value} handleButtonClick={handleButtonClick}/>
      
      {recipeShown&&
        <ClaudeRecipe reciepe={recipeShown} />}
      </div>


    </main>
  )
}

export default Main
