import React from 'react'
// import sadieUpClose from '../photos/sadieUpClose.JPG'
import sadieWithPenguin from '../photos/sadieWithPenguin.JPG'

const About = () => {
  return (
    <div>
      <div className="container">
        <h1 className="center  red darken-3 white-text">About</h1>
        <h2 className="red darken-3 white-text" >Hi, my name is Sadie and I spend lots of my time hanging out looking for critters. We have lots of 
          critters around my house and it's lots of fun to figure out where they are and then immediatley alert 
          the neighbors. The people I live with also love it when I find a critters lurking in the yard   </h2>
        {/* <img src={sadieUpClose} width="350" height="420"/> */}
        <img src={sadieWithPenguin} width="350" height="420" alt=""/>
      </div>
    </div>
  )
}

export default About