import React from 'react'

const education_card = (props) => {
  return (
    <div>
       <div className="ed-mj ed-card">
            <h2 className='clr-2'>{props.year}</h2>
            <h2>{props.course}</h2>
            <h3 className='clr-2'>{props.clg}</h3>
            <h4 className='clr-3'>{props.percentage}</h4>
        </div>
    </div>
  )
}

export default education_card
