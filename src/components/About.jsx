import React from 'react'
import myImage from './my-imag.png'
import './about.css'
const About = () => {
  return (
    <div className="about-container">
      <h1 className="About-title"> welcome To Sangeet Sphere </h1>
      <h2 className="about-sub"> About Us</h2>
      <p> Once Again Welcome to Sangeet Sphere, your one-stop destination for the best music experience!</p>
        <p>
          Our player brings you an ever-growing collection of Kannada, Hindi, and Telugu songs, covering everything from timeless classics to the latest chartbusters.</p> 

         
 ✨ Features:
 <h2> 
 🎧 Wide collection of Kannada, Hindi & Telugu hits
<br/>
 🔍 Easy search & quick access to your favorites
<br/>
 ❤️ Create your own playlists
<br/>
 📱 Works seamlessly on mobile and desktop</h2>


 <h1> About Creator</h1>
 <img src={myImage} alt='Darshan'/>
 <h2 className='about-me'>
   Hi, I’m Darshan, the mind and heart behind SangeetSphere.
 </h2>
<h4 className="h4">
  I created this platform to bring together the rich musical heritage of Kannada, Hindi, and Telugu in one easy-to-use player. As a passionate developer and music lover, my goal is to give listeners a smooth, modern, and enjoyable music experience while celebrating the diversity of Indian music.
</h4>

    </div>
  )
}

export default About





