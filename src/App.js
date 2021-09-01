import './App.css';
import data from './data.json'
import Header from './components/Header'
import Body from './components/Body'
import Info from './components/Info'
import Responsive from './components/Responsive'
import { EntireContext } from './HOC/entireContext'
import { useRef, useState } from 'react';


function App() {

  const [ResponsiveMenu, setResponsiveMenu] = useState(false);
  const [Planet, setPlanet] = useState(0);
  const [View, setView] = useState(0)
  const PlanetImage = useRef(null);
  const PlanetContainer = useRef(null);
  const TextContainer = useRef(null);

  const handleClick = ( type, index ) => {

    if( type === "view" ) {

        if( index != 2 ) {
          PlanetImage.current.classList.add("Rotate");
        
          setTimeout(() => {
            setView(index);
          }, 500);

          setTimeout(() => {
            PlanetImage.current.classList.remove("Rotate");
          }, 1000);

          return;
        } else {
          setView(index);
          return;
        }
    }

    if( type === "planet" ) {
      setResponsiveMenu(!ResponsiveMenu);

      PlanetContainer.current.classList.add("goAway");
      TextContainer.current.classList.add("Fade");

      setTimeout(() => {
        setPlanet(index);
      }, 1000);

      setTimeout(() => {
        TextContainer.current.classList.remove("Fade");
      }, 2000);

      setTimeout(() => {
        PlanetContainer.current.classList.remove("goAway");
      }, 2000);

      return;
    }

  }

  return (
    <EntireContext.Provider value={{
      ResponsiveMenu,
      setResponsiveMenu,
      data,
      Planet,
      setPlanet,
      View,
      setView,
      handleClick,
      PlanetImage,
      PlanetContainer,
      TextContainer,
    }}> 
    
      <div className="App">
        <div className="Background"></div>
        <Header />
        <Responsive />
        <Body />
        <Info />
      </div>
      
    </EntireContext.Provider >
  );
}

export default App;
