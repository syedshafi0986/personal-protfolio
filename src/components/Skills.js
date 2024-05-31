import React from 'react'
import html from "./images/html.png"
import css from "./images/css.png"
import js from "./images/js.png"
import mongo from "./images/mongo.jpg"
import express from "./images/express.png"
import python from "./images/python.png"
import node from "./images/node.png"
import react from "./images/react.png"
import c from "./images/c.png"
import java from "./images/java.jpg"


const Skills = () => {
  return (
    <div className='skills-section'>
      <h1>What Skills Do I Posses?</h1>
      <div className="skills">
        <img src={html} alt="" />
        <img src={css} alt="" />
        <img src={js} alt="" />
        <img src={mongo} alt="" />
        <img src={node} alt="" />
        <img src={express} alt="" />
        <img src={python} alt="" />
        <img src={react} alt="" />
        <img src={c} alt="" />
        <img src={java} alt="" />
      </div>
      {/* <hr /> */}
    </div>
  )
}

export default Skills
