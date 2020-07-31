import React from 'react'
import bobcat1 from '../photos/bobcat1.JPG'

const Critters = () => {
  return (
    <div>
      <div className="container">
        <h1 className="center  orange darken-3 white-text" >Critters</h1>
        <h2 className=" center orange  darken-3 white-text" >These are the critters I see from my back deck look-out</h2>
        <img src={bobcat1} width="688" height="457" alt=""/>

      </div>
    </div>
  )
}

export default Critters