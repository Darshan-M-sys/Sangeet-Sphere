import React from 'react'
import './home.css'
import { FaArrowRight } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Header from './Header';

const Home = () =>{
  return (
    <div>
      <Header/>
    <main>
<div className="home-container">
  
<h2>welcome To SangeetSphere Music Player </h2>
<p>SangeetSphere – Where Every Beat Finds Its Home.
A musical world uniting Kannada, Hindi, and Telugu melodies.
From golden classics to the latest hits, everything is here.
Crafted for every mood, every moment, and every listener.
Your journey through the sphere of music starts now..</p>
<div className='CTA'>
<Link to='/product' className="link" style={{ textDecoration: "none", color: "inherit" }}><button>Get's Started<FaArrowRight /></button></Link>
</div>
</div>
    </main>
     <footer>
      <div className="footer-container">
        <div className="social-media-icons">

      <BsInstagram  className="icon"/>
      <FaFacebook  className="icon"/>
      <FaLinkedin  className="icon"/>
        </div>
        <div className='copy-right'>
          <p> &copy; 2025 Darshan. All rights reserved.</p>
          </div>

      </div>
    </footer>
   </div>
  )
}

export default Home
