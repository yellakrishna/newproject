import React from 'react'
import './Items.css'
import { NavLink } from "react-router-dom";


let data=[
    {
      id:1,
      img:"./images/gold.png",
      name:" Bangaru Thiga ",
      price:" 180/-"
    },
    {
      id:2,
      img:"./images/matta.png",
      name:"Kora Matta",
      price:" 200/-"
    },
    {
      id:3,
      img:"./images/bocha.png",
      name:"Bocha",
      price:"180/-"
    },
    {
      id:4,
      img:"./images/dubocha2.png",
      name:"Dubocha",
      price:"100/-"
    },

    {
        id:5,
        img:"./images/snake.png",
        name:"Pamchapa",
        price:"200/-"
      },
     {
        id:6,
        img:"./images/ravvlu.png",
        name:"Ravu",
        price:"150/-"
      }, 
      {
        id:7,
        img:"./images/royyalu (1).png",
        name:"Royyalu",
        price:"400/-"
      },
  ]
const Items = () => {
  return (
    <>
       <h1 className=' head mt-2 text-bg-info text-center text-dark'> Online Booking</h1>
      <div  className='contact-container'>
     <ul>
     {
      data.map((eachItem)=>{
        const {id,img,name,price}=eachItem
        return(
          <div className='items'>
         <li key={id}></li>
         <img src={img} alt='gold-fish' style={{height:80, width:100}}/>
         <h6 className='text-warning bg-secondary'><span className='text-white'>Name: </span>{name}</h6>
         <p>price: {price}</p>
         <NavLink to="/contact" className="btn btn-success">
                  Add
                </NavLink>
      </div>
          
        )
      })
     }
     </ul>
      
 
    </div>
    </>
  )
}

export default Items
