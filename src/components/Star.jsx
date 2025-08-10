import React from 'react'
import starFilled from "../assets/star-filled.png"
import starEmpty from "../assets/star-empty.png"
const Star = ({toggleFavorite, isFilled}) => {
    let starIcon = isFilled?starEmpty:starFilled
  return (
    <div>
         <button
                        onClick={toggleFavorite}
                        aria-pressed={isFilled}
                        aria-label ={isFilled? "Remove from favorite": "Add to favorites"} 
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={isFilled ? "filled star icon": "empty star icon" }
                            className="favorite"
                        />
                    </button>
      
    </div>
  )
}

export default Star
