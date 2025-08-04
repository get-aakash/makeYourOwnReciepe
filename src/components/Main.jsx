import React from 'react'

const Main = () => {
    const ingredients = ['Chicken', "Oregano", "Tomatoes"]
    const [isImportant, setIsImportant] = React.useState("Yes")
    const [counter, setCounter] = React.useState(0)
    const [isGoingOut, setIsGoingOut]  =React.useState(false)
    const [myFavoriteThings, setmyFavoriteThings] = React.useState([])

    const mapIngredients = ingredients.map((item, index)=> <li key={index}>{item}</li>
        
    )
    const myArray = ["a", "b","c","d"]

    function handleGoingOut(){
          setIsGoingOut(!isGoingOut)

    }
    function handleOnClick(e){
        e.preventDefault()
        console.log("function clicked!!")
        setIsImportant("Definitely")

    }
    function addMyFavoriteThing(){
        setmyFavoriteThings([...myFavoriteThings, "test"])
        console.log(myFavoriteThings)
    }
    function handleDecrease(){

        counter>0?setCounter(counter-1):counter
    }

    function handleIncrease(){
        setCounter(counter+1)
    }
    const handleOnSubmit =(e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        console.log("formData", formData)
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        console.log("Function submitted")
        ingredients.push(newIngredient)
        console.log(ingredients)
    }
  return (
    <main>
      <form onSubmit={handleOnSubmit}className='form-ingredient' action="" >
        <input aria-label='Add Ingredient' type="text" placeholder='e.g. oregano' name='ingredient'/>
        <button  type='submit' >Add Ingredient</button>
      </form>
      <ul>{mapIngredients}</ul>
      <button onClick={handleOnClick}>{isImportant}</button>

      <h1>How many times will Bob say "state" in this section</h1>
      <div className="counter">
        <button className='minus' aria-label='Decrease count' onClick={handleDecrease}>-</button>
        <h2 className='count'>{counter}</h2>
        <button className='plus' onClick={handleIncrease} aria-label='Increase count'>+</button>
      </div>
      <h1>Do i feel like going out tonight?</h1>
      <button onClick={handleGoingOut}>{isGoingOut?"Yes":"False"}</button>

      <button onClick={addMyFavoriteThing}>Add item</button>
    </main>
  )
}

export default Main
