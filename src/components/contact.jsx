import React from 'react'

const Contact = () => {
  return (
    <div className='contact-section'>
      {/* <hr/> */}
      <h1 className='section-subtitle clr-2'>Contact me</h1>
        <div className="contact-texts">
      <h1>Wanna Collabrate?</h1>
      {/* <h2>Contact Me</h2> */}
      <p>Fill out the form and I will in touch with you as soon as possible </p>
      <h3>Address:</h3>
      <p>Hyderabad,Telangana,India.</p>
      <h3>phone no.:</h3>
      <p>(+91)8341832761</p>
      <h3>Email:</h3>
      <p>shafi02367@gmail.com</p>
      </div>
      <form action="" className='contact-form'>
        <div className="contact-card">
        <label htmlFor="Name" >Name:</label>
        <input type="text" id='name'  />
        <label htmlFor="mail">Email:</label>
        <input type="email" id='mail' />
        <label htmlFor="phn">Phone no.:</label>
        <input type="number" id='phn' />
        <label htmlFor="desc">Description:</label>
        <input type="text" id='desc' />
        <button type="submit">SEND</button>
        </div>
      </form>
    </div>
  )
}

export default Contact
