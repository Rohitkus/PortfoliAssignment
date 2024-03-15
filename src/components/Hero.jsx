import React from 'react'
import './hero.css'

export default function Hero({mode}) {
  return (
    <div className='hero'>
      
      <div className='herocontainer'>
        <div className='leftcontainer'>
           <div className='textcont'>
           <button>
            Hello!
           </button>
           <h1>I'm <span>Anish</span> <img src="/Wave.svg" alt="" /> </h1>
           <p>
           UI/UX Designer, Front-End Developer & Thinker. <br />
             Based in India.
           </p>

           <div className='btns'>
            <bitton className="downloadbtn">Download CV</bitton>
            <bitton className="touchbtn">Get In Touch</bitton>
           </div>
           </div>
        </div>
        <div className='rightcontainer'><img src="/Image.png" alt="profile" width="550"  /></div>
      </div>
    </div>
  )
}
