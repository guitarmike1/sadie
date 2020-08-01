import React from 'react'
import bobcat1 from '../photos/bobcat1.JPG'

const Critters = () => {
  return (
    <div className="container">
    
    <h1 className="center  orange darken-3 white-text" >Critters</h1>
      <div class="row">
      <h2 className=" col s4 orange  darken-3 white-text" >These are the critters I see from my back deck look-out</h2>
      <h2 className="col s10"></h2>
    <div class="row">

        <img className src={bobcat1} width="688" height="457" alt=""/>

      </div>
      </div>
    </div>
  )
}

export default Critters