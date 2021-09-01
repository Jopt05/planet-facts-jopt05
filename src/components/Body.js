import React, { useContext, useEffect, useRef } from 'react'
import { EntireContext } from '../HOC/entireContext'
import Button from './Button';

const Body = () => {

    const Context = useContext(EntireContext);

    const { data, Planet, View, PlanetImage, PlanetContainer, TextContainer } = Context;

    const prevState = useRef("");

    useEffect(() => {
        
        if( View != 2 ) {
            prevState.current = View;
            return;
        }

    }, [View]);

    return (
        <div className="Body">
            <div ref={ PlanetContainer } className="Body__Container">
                {/* <img ref={ PlanetImage } className="Planet__Image" src={ View != 2 ? Object.values(data[Planet].images)[View] : Object.values(data[Planet].images)[View - 1] } /> */}
                <img alt="Planet screen" ref={ PlanetImage } className="Planet__Image" src={ View != 2 ? Object.values(data[Planet].images)[View] : Object.values(data[Planet].images)[prevState.current] } />
                <img alt="Planet img" className={ `Planet__Geology ${ View === 2 ? 'Planet__Geology-Active' : '' }` } src={ Object.values(data[Planet].images)[2] } />
            </div>
            <div className="Body__Container">
            <div ref={ TextContainer } className="Body__Container_div">
                <h1 className="Planet__Name">{ data[Planet].name }</h1>
                <p className="Planet__Description">{ Object.values(data[Planet])[View + 1].content }</p>
            </div>
            <div className="Body__Container_div">
                <p className="Source">Source: </p> <a className="Link" target="_blank" href={ Object.values(data[Planet])[View + 1].source }>Wikipedia</a>
            </div>
            <div className="Body__Container_div">
                <Button Point={ 0 } type={ "view" } index={ 0 } prefix={ "01" } text={ "Overview" } />
                <Button Point={ 1 } type={ "view" } index={ 1 } prefix={ "02" } text={ "Internal Structure" } />
                <Button Point={ 2 } type={ "view" } index={ 2 } prefix={ "03" } text={ "Surface Geology" } />
            </div>
            </div>
        </div>
    )
}

export default Body
