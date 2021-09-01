import React, { useContext } from 'react'
import { EntireContext } from '../HOC/entireContext'
import Button from './Button';
import ResNavElement from './ResNavElement';

const Responsive = () => {

    const Context = useContext(EntireContext)

    const { ResponsiveMenu } = Context;

    return (
        <>
            <div className={ `Res__Nav ${ ResponsiveMenu ? 'hidden' : '' }` }>
                <ResNavElement text={ "Mercury" } mode={ "Res" } type={ "planet" } index={ 0 } />
                <ResNavElement text={ "Venus" } mode={ "Res" } type={ "planet" } index={ 1 } />
                <ResNavElement text={ "Earth" } mode={ "Res" } type={ "planet" } index={ 2 } />
                <ResNavElement text={ "Mars" } mode={ "Res" } type={ "planet" } index={ 3 } />
                <ResNavElement text={ "Jupiter" } mode={ "Res" } type={ "planet" } index={ 4 } />
                <ResNavElement text={ "Saturn" } mode={ "Res" } type={ "planet" } index={ 5 } />
                <ResNavElement text={ "Uranus" } mode={ "Res" } type={ "planet" } index={ 6 } />
                <ResNavElement text={ "Neptune" } mode={ "Res" } type={ "planet" } index={ 7 } />
            </div>
            <div className="Res__Views">
                <Button Point={ 0 } type={ "view" } index={ 0 } mode={ "Res" } text={ "Overview" } />
                <Button Point={ 1 } type={ "view" } index={ 1 } mode={ "Res" } text={ "Structure" } />
                <Button Point={ 2 } type={ "view" } index={ 2 } mode={ "Res" } text={ "Surface" } />
            </div>
        </>
    )
}

export default Responsive
