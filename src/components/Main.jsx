import React from 'react'

const Main = () => {
   const [ingredients, setIngredients] = React.useState([])
   

    const handleOnSubmit =(e)=>{
      e.preventDefault()
      const formData = new FormData(e.target)
      const newIngredient = formData.get("ingredient")
      setIngredients([...ingredients, newIngredient])
        
    }
    const value = ingredients.map((ingredient,i)=><li key={i}>{ingredient}</li>)
  return (
    <main>
      <form onSubmit={handleOnSubmit}className='form-ingredient' action="" >
        <input aria-label='Add Ingredient' type="text" placeholder='e.g. oregano' name='ingredient'/>
        <button  type='submit' >Add Ingredient</button>
      </form>
      <ul>{value}</ul>
      

      
      
      

      
    </main>
  )
}

export default Main
