import React from 'react'
import './add.css'


const numbers =[
  {
    id:1,
    img:"./images/yellakrishna.jpg",
    name:" YELLA KRISHNA",
    mobile:"720770928*"
  },
  {
    id:2,
    img:"./images/kalyan.jpg",
    name:" KALYAN ",
    mobile:"756981855*"
  },
  {
    id:3,
    img:"./images/parsha.jpg",
    name:" PARUSHA RAMUDU ",
    mobile:" 767586003*"
  },
  {
    id:4,
    img:"./images/naresh.jpg",
    name:" NARESH ",
    mobile:" 950246614*"
  },
  {
    id:5,
    img:"./images/sunil.jpg",
    name:" SUNIL KURMAR ",
    mobile:" 799536614*"
  },
  {
    id:6,
    img:"./images/chand.jpg",
    name:" CHAND BASHA ",
    mobile:"970415059*"
  },
  {
    id:7,
    img:"./images/mouli.jpg",
    name:" MOULI",
    mobile:"*"
  },
]

const Contact = () => {
  return (
    <>
    <h1 className='mt-2 text-bg-info text-center '> Contacts</h1>
    <ul>
      {
        numbers.map((each) =>{
          const {id,name,img,mobile} = each;
          return(
            <div className='bg'>
            <div className='contact-items'>
              <li key={id}></li>
              <img src= {img} alt="contact" style={{height:60, width:90}}/>
              <h6 className='text-info'>{name}</h6>
              <li className='text-success'>{mobile}</li>
            </div>
            </div>
          )
        })
      }
    </ul>
    </>
  )
}

export default Contact
