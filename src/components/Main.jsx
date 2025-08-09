import React from 'react'

const Main = () => {
   const [ingredients, setIngredients] = React.useState([])
   

    const handleOnSubmit =(formData)=>{
      const newIngredient = formData.get("ingredient")
      setIngredients([...ingredients, newIngredient])
        
    }
    const value = ingredients.map((ingredient,i)=><li key={i}>{ingredient}</li>)
  return (
    <main>
      <form action={handleOnSubmit}className='form-ingredient' >
        <input aria-label='Add Ingredient' type="text" placeholder='e.g. oregano' name='ingredient'/>
        <button  type='submit' >Add Ingredient</button>
      </form>
      <ul className='ingredients-list'>{value}</ul>
      
    </main>
  )
}

export default Main
