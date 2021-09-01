import React, { useContext } from 'react'
import { EntireContext } from '../HOC/entireContext'

const Button = ({ mode, Point, type, index, prefix, text }) => {

    const Context = useContext(EntireContext)

    const { handleClick, View } = Context;
    
    return (
        <div 
            className={ mode === "Res" ? ` Res__Views-Container ${ View === Point ? 'ViewActive' : '' } ` : ` Body__Container-button ${ View === Point ? 'ButtonActive' : '' } ` } 
            onClick= { () => handleClick( type, index ) }
        >
            {
                prefix
                ? <p className="Body__Container-button-prefix">{ prefix }</p>
                : ''
            }
                <p className={mode === "Res" ? `Res__Views-Container-text` : `Body__Container-button-text` }>
                    { text }
                </p>
        </div>
    )
}

export default Button
