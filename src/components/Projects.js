import React from 'react'
import weather from "./images/weather.jpg"
import tictactoe from "./images/tictactoe.jpg"
import chat from "./images/chat.png"
import todo from "./images/todo.png"

const Projects = () => {
  return (
    <div className='project-section'>
            <h1>Projects I Have Build Soo Far...</h1>
            <h3>Have a look at my projects which I have done during my college journey </h3>
        <div className="projects-container">
            
            <div className="project">
              <a href="https://6659b5ba31072b1cf96e0435--stellar-conkies-e8c4fb.netlify.app/" target="_blank"><img src={weather} alt="" /></a></div>
            {/* <div className="project"><a href="#"><img src={chat} alt="" /></a></div> */}
            <div className="project"><a href="https://react-game-123.netlify.app/" target="blank"><img src={tictactoe} alt="" /></a></div>
            <div className="project"><a href="https://663c72c3a087b4678b92dc5a--jade-queijadas-f96dbc.netlify.app/" target='blank'><img src={todo} alt="" /></a></div>
          
        </div>

      
    </div>
  )
}

export default Projects
