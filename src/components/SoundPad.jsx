import React from 'react'
import pads from './pads'

const SoundPad = ({darkMode}) => {
    const [sound, setSound] = React.useState(pads)
    const styles = darkMode ? "#222222": "#cccccc" 
    const data = sound.map((item) =><button style={{backgroundColor:styles}}  key={item.id}>{item.color}</button>
        
    )
    return (
        <div className='pad-main'>
            <div className="pad-container">
                {data}
            </div>

        </div>
    )
}

export default SoundPad
