import React from 'react'
import "./about.css"
import aboutPic from "../assets/aboutPic1.jpg"
import { Link } from "react-router-dom";
// import { GiPlantRoots } from "react-icons/gi"
const About = () => {
  return (
    <>
      <div className='container'>
          <img src={ aboutPic } alt="aboutPic" />
        <div class="centered">
          <h1>About Us</h1>
          <p>
            This website helps farmers to buy and sell their products, This was created by Darius 5023 and Dharunkumar 5028.
          </p>
          <p>
            This is created to help farmers to buy and sell their products without the help of a intermediate vendor.
          </p>
          <p>
            So they can sell and buy their products on their own prices, That'll make profit for the farmers.
          </p>
          <p>
            Also this site helps student to start their own farming. This helps youngsters to learn smart farming.
          </p>
          <p>
            For more Details Contact Us!
          </p>
          <Link to="/contact"><button  className='btn-cont'>Contact</button></Link>
        </div>
        
      </div>
    </>
  )
}

export default About