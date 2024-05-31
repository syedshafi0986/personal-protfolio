import React from 'react'
import myself from "./images/me.jpg"
import github from "./images/github.png"
import linkedin from "./images/linkedin.png"

const HeroPage = () => {
  return (
    <div className='heropage'>
      <div className="right-section">
      <h1>Hello There👋</h1>
      <h3>I am <span className='name' ><h1>Syed Shafi</h1> </span> </h3>
      <h3>Aspiring SoftWare Developer</h3>
        {/* <button>Download Resume</button> */}
      {/* <div className="social-media">
        <a href=""><img src={linkedin} alt="" /></a>
        <a href=""><img src={github} alt="" /></a>
      </div> */}
      </div>
      <img src={myself} alt="" />
        
    </div>
  )
}

export default HeroPage
