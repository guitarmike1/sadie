import React from 'react'
import bobcat1 from '../photos/bobcat1.JPG'

const Critters = () => {
  return (
    <div>
      <div className="container">
        <h4 className="center">Critters</h4>
        <h5>These are the critters I see from my back deck look-out</h5>
        <img src={bobcat1} width="688" height="457" alt=""/>

      </div>
    </div>
  )
}

export default Critters