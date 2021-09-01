import React, { useContext } from 'react'
import { EntireContext } from '../HOC/entireContext'
import InfoContainer from './InfoContainer';

const Info = () => {
  
    const Context = useContext(EntireContext);

    const { data, Planet } = Context;

    return (
        <div className="Info">
          <InfoContainer title={ "Rotation Time" } information={ data[Planet].rotation } />
          <InfoContainer title={ "Revolution Time" } information={ data[Planet].revolution } />
          <InfoContainer title={ "Radius" } information={ data[Planet].radius } />
          <InfoContainer title={ "Average Temp" } information={ data[Planet].temperature } />
      </div>
    )
}

export default Info
