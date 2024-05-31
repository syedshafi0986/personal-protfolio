import React from 'react'
import coder from "./images/coder.jpg"
import myself from "./images/myself2.jpg"

const About = () => {
  return (
    <>
    <div className="about-heading">

      <h1>About Me ...</h1>
    </div>
    <div className='about-section'>
      <div className="right-about">
        {/* <img src={myself} alt="" /> */}
      </div>
      <div className="left-about">
        <h2>Who Am I?</h2>
        <p>hi, I am Syed Shafi an UnderGrad Student majoring in Computer Science Engineering ,A dedicated individual With an immense passion for web technologies .With a strong foundation in front end web technologies particularly in React,I'm passionate about crafting intuative User interfaces . Beyond the screen, I've ventured into backend development, exploring the intricacies of data management and server-side logic . I always strive to develop interactive interfaces with intuative functionalities.
          With a commitment to continous learning and improvement am excited to embark on new challenges and push the boundries to delve deeper into the realm of technology.
        </p>
       
        {/* <p>p> */}
        
      </div>
    </div>
    </>
  )
}

export default About
