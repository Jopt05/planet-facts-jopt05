import React from 'react'

const InfoContainer = ({ title, information }) => {
    return (
        <div className="Info__Container">
          <p className="Info__Container-title">
            { title }
          </p>
          <p className="Info__Container-data">
            { information }
          </p>
        </div>
    )
}

export default InfoContainer
