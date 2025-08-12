import React from 'react'

const MyPad = ({item, on}) => {
    const [toggleOn, setToggleOn] = React.useState(on)

    function handleButtonClick(){
        setToggleOn(prevData=>!prevData)
        console.log(toggleOn)
    }
    
  return (
    <div>
        <button onClick={handleButtonClick} style={{backgroundColor:item}} className={toggleOn? "on":""} ></button>
      
    </div>
  )
}

export default MyPad
