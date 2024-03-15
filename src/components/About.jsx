import './about.css'

export default function About({mode}) {
  return (
    <div className='about' style={{overflow:"hidden"}}>
        <div>
           <div className='v1'> 
           <img src="/v1.png" alt="v1" />
           <img src="/v2.png" alt="v1" className='v2img' />
           
           </div>
          
           <div className='v3'> <img src="/v3.png" alt="v1" className='v3img' />
         <img src="/v4.png" alt="v1" className='v4img' />
           
           </div>
        </div>

        <div className='aboutcontiner'>
           
            <img src="/Rectangle.png" alt="" width="380px" />
           
           <div>
            <div>
<h1> <span style={{fontSize: "34px"}}>T</span>his is it. ;)  _________________________________________________ </h1> <br />
<p>
Anish Kr. Sinha is an Indian <span>UI/UX Designer & Front End Developer</span> with a passion for designing beautiful and 
fuctional user experiences. Typically, he’s Driven & permanently Curious. He’s obsessed with designing things 
and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of 
creating since he hung his first painting on the wall when he was 11. <br />
He holds a <span>bachelor degree in Computer Applications</span>. During his graduation, he has been actively involved in the
 web design community for the last 3 years. he has designed websites for small businesses, events, nonprofits and 
 more. Currently he’s based in Bihar, India. Where he’s working as an independent creative.  <br /> <br />

His interests, however, extend beyond the web and he loves helping people with branding and print design. He even 
loves designing <span>3D floor plan</span> <br /> <br />


When he’s not designing, he’s probably hanging out with his girlfriend, watching series, sketching or messing around
 on something inspired by YouTube tutorials.
</p> <br /> <br />


<hr className='hrline' width="50%"  style={{backgroundColor:mode?"black":"white"}}/>



            </div>
           </div>
        </div>
      
    </div>
  )
}
