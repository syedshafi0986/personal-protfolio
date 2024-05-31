import React from 'react'

const NavBar = () => {
  return (
<nav>
    {/* <div className="nav--container"> */}

    <h1>Personal Protfolio</h1>
    <ul className='nav--elements'>
        <li> <a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Skills</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
    {/* </div> */}

</nav>

    
  )
}

export default NavBar
