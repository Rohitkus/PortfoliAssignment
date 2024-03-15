import './App.css'
import { useState } from 'react'
import Component from './Component'
import About from './components/About'
import Hero from './components/Hero'
import Social from './components/Social'

function App() {
  const [mode,setmode]=useState(true)
 
 function get(data){
  setmode(!mode)
 }
 
//  if(mode){
//   setcolor("black")
//  }
//  else{
//   setcolor("white")
//  }


  return (
    <div          style={{color:mode?"black":"white",backgroundColor:mode?"white":"black"}} >

      <section className='navbar'>


    <Component get={get}/>
      </section>

    <section id="home">  

    <Hero mode1="mode"/>
    </section>
    <Social mode1={mode}/>

    <section id="about">  
      
    <About  mode={mode}/>
      </section>
    </div>
  )
}

export default App
