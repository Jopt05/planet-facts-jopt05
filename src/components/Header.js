import React, { useContext } from 'react'
import { EntireContext } from '../HOC/entireContext'
import ResNavElement from './ResNavElement';

const Header = () => {

    const Context = useContext(EntireContext);

    const { setResponsiveMenu, ResponsiveMenu } = Context;

    return (
        <header className="Header">
            <div className="Header__Container">
                <h1>The planets</h1>
            </div>
            <div className="Header__Burger" onClick={ () => setResponsiveMenu(!ResponsiveMenu) }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <nav className="Header__Nav">
                <ResNavElement text={ "Mercury" } mode={ 0 } type={ "planet" } index={ 0 } />
                <ResNavElement text={ "Venus" } mode={ 0 } type={ "planet" } index={ 1 } />
                <ResNavElement text={ "Earth" } mode={ 0 } type={ "planet" } index={ 2 } />
                <ResNavElement text={ "Mars" } mode={ 0 } type={ "planet" } index={ 3 } />
                <ResNavElement text={ "Jupiter" } mode={ 0 } type={ "planet" } index={ 4 } />
                <ResNavElement text={ "Saturn" } mode={ 0 } type={ "planet" } index={ 5 } />
                <ResNavElement text={ "Uranus" } mode={ 0 } type={ "planet" } index={ 6 } />
                <ResNavElement text={ "Neptune" } mode={ 0 } type={ "planet" } index={ 7 } />
            </nav>
        </header>
    )
}

export default Header
