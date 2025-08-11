import React from 'react'

const MyPad = ({item}) => {
    console.log(item)
  return (
    <div>
        <button style={{backgroundColor:item}} ></button>
      
    </div>
  )
}

export default MyPad
