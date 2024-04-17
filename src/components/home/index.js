import React from 'react'
import "./style.css";
const Home = () => {
  return (
    <div className='home-container'>
      <img src='./images/fish5.jpg' className='home-back' alt= 'background'/>
      <div className='main-heading'>
      <h1 >Online Fish Marketing</h1>
      
      <p> Only Available In ALAMPUR

      </p>
      
      <li>Coming Soon...</li>
     
      </div>
      <div className='side-image'>
        <img src='../images/side-image.jpeg' alt='fish'  className='image-side' />
        
      </div>
      <button className='button'>Booking</button>
      
    </div>
  )
}

export default Home
