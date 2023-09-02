import React from "react";
import { NavLink } from 'react-router-dom';
import profile1 from '../Images/namaste.jpg';

const Navbar = () =>  {
  let n="value1";
  return <nav>  
    
    <a id="v"> <strong>𝗡𝗮𝗺𝗮𝘀𝘁𝗲 𝗜𝗻𝗱𝗶𝗮</strong></a>

    <NavLink id="am" to='/'>ABOUT</NavLink>
    <NavLink id="rsm" to='/resume'>RESUME</NavLink>
    <NavLink id="pro" to='/project'>PROJECTS</NavLink>
    
    <NavLink id='cnt' to='/cont'>CONTACT</NavLink>
    <img className="img1" src={profile1} alt={n} />
    
      
    </nav>  ;
    
    



}
export default Navbar;