import { useState } from "react";
import "./social.css";


export default function Social({mode1}) {
console.log(mode1)
    const[color,setcolor]=useState("black")
    return (
           <>
      <div className="social">
        {/* ?facebook */}
         
        <a href="">
        {
              mode1? (<img src="/Facebook.svg" alt="gfdf" /> ) :(  <img src="/fw.png" alt="rohit"  />)
            }
        </a>

        {/*  */}
        <a href="">
        {
              mode1? (<img src="/Instagram.svg" alt="gfdf" /> ) :(  <img src="/iw.svg" alt="rohit" />)
            }
        </a>
        {/*  */}
        <a href="">
        {
              mode1? (<img src="/Twitter.svg" alt="gfdf" /> ) :(  <img src="/tw.svg" alt="rohit" />)
            }
        </a>

        {/*  */}
        <a href="">
        {
              mode1? (<img src="/GitHub.svg" alt="gfdf" /> ) :(  <img src="/gw.svg" alt="rohit"  />)
            }
        </a>

        {/*  */}
        <a href="">
        {
              mode1? (<img src="/Telegram.svg" alt="gfdf" /> ) :(<img src="/tgw.svg" alt="rohit"  />)
            }
        </a>

        {/*  */}
        <a href="">
        {
              mode1? (<img src="/LinkedIn.svg" alt="gfdf" /> ) :( <img src="/liw.svg" alt="rohit"  />)
            }
        </a>

        {/*  */}
        <a href="">

            {
              mode1? (<img src="/Koo.svg" alt="gfdf" /> ) :( <p className="kobor"> <img src="/bk.svg" alt="rohit" width="16" /></p>)
            }
          
        </a>
      </div>


      <div className="email">
      {
              mode1? (<img src="/emailb.png" alt="gfdf" width="15" />  ) :(  <img src="/emailw.png" alt="rohit" width="15" />)
            }_
      </div>
    </>
  );
}
