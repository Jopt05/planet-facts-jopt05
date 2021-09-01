import React, { useContext } from 'react'
import { EntireContext } from '../HOC/entireContext'

const ResNavElement = ({ text, mode, type, index }) => {

    const Context = useContext(EntireContext)

    const { handleClick } = Context;

    const handleAddColor = ({ target }) => {
        let element = target;
        if ( mode === "Res" ) {
            while (!element.classList.contains("Res__Nav-element")) {
                element = element.parentNode;
            }
            element.classList.add("Colorize");
            setTimeout(() => {
                element.classList.remove("Colorize");
            }, 600);
        }
    }

    return (
        <div className={ `${ mode === "Res" ? 'Res__Nav-element' : 'Header__Nav-element' }` } onClick={ (e) => {handleAddColor(e); handleClick( type, index )} }>
            <p className={ `${ mode === "Res" ? 'Res__Nav-element-text' : 'Header__Nav-element-text' }` }>
                { text }
            </p>
        </div>
    )
}

export default ResNavElement
