import React from 'react'
import Education_card from './education_card'

const education = () => {
  // console.log(props)
  return (
    <div className='education'>
      
        <h1>Education</h1>
      <div className="ed-container">
       <Education_card 
        year="2021-2025"
        course="Computer Science Engineering"
        clg="Muffakham Jah College Of Engineering And Technology"
        percentage=" CGPA:8.1"
       />
       <Education_card 
        year="2019-2021"
        course="InterMediate-MPC(Maths,Physics,Chemistry)"
        clg="Narayana Junior College"
        percentage=" Percentage:97.2%"
       />

        
      </div>
    </div>
  )
}

export default education
