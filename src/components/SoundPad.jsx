import React from 'react'
import pads from './pads'
import MyPad from './MyPad'

const SoundPad = ({ darkMode }) => {
    const [sound, setSound] = React.useState(pads)
    
    
    return (
        <div className='pad-main'>
            <div className="pad-container">
                {sound.map((item) => {
                    return (
                        <MyPad item={item.color} on={item.on} />
                    )
                })}

            </div>

        </div>
    )
}

export default SoundPad
