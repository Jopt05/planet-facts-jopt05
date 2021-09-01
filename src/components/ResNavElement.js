import React, { useContext } from 'react'
import { EntireContext } from '../HOC/entireContext'

const ResNavElement = ({ text, mode, type, index }) => {

    const Context = useContext(EntireContext)

    const { handleClick } = Context;

    return (
        <div className={ `${ mode === "Res" ? 'Res__Nav-element' : 'Header__Nav-element' }` } onClick={ () => handleClick( type, index ) }>
            <p className={ `${ mode === "Res" ? 'Res__Nav-element-text' : 'Header__Nav-element-text' }` }>
                { text }
            </p>
        </div>
    )
}

export default ResNavElement
