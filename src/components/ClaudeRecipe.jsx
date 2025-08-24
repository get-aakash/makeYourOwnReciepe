import React from 'react'
import ReactMarkdown from "react-markdown"

const ClaudeRecipe = ({reciepe}) => {
  return (
    <section className='suggested-recipe-container' aria-live='polite'>
        <h2>Chef Recommends:</h2>
        <ReactMarkdown>{reciepe}</ReactMarkdown>
          
        </section>
  )
}

export default ClaudeRecipe
