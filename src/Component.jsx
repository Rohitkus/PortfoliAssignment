import React,{useState} from 'react'
import './component.css'

 
export default function Component(props) {
  const [mode,setmode]=useState(true)


  const handlemode=()=>{
    setmode(!mode)
    props.get(mode)
  }
 
  
  return (
    <>
     
     <div className='main' style={{backgroundColor:mode?"white":"black"}}>
        <div className='logo' > 
        {
              mode?( <img src="/Logo.svg" alt="" width="35" />):( <img src="/logow.svg" alt="" width="35" />)}
       <div className='name'> ANISH KUMAR SINHA </div>
        </div>
        <div>
            <ul className='navlink' >
                <a href="#home"   style={{color:mode?"black":"white"}}>
           <li>Home</li>

                </a>
                <a href="#about"  style={{color:mode?"black":"white"}}>


            <li>About</li>
                </a>

                <a href=""  style={{color:mode?"black":"white"}}>    <li>Resume</li>  </a>
          <a href=""  style={{color:mode?"black":"white"}}>   <li>Skill</li> </a>
         
          <a href=""  style={{color:mode?"black":"white"}}>   <li>Project</li> </a>
          <a href=""  style={{color:mode?"black":"white"}}>     <li>Contact</li></a>
          <li onClick={handlemode}>
          
          {
          mode?( <img src="/mooon.png" alt="" width="40" />):( <img src="/sun.svg" alt="" width="40" />)}
         
         </li>
          
           
            </ul>
        </div>
     </div>
    </>
  )
}
