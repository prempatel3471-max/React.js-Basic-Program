import React from 'react'   

function Navbar() {
  return (
   


    <ul style={{display:'flex',justifyContent:'space-between',listStyleType:'none'}}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/contact"}>Contact</Link></li>
    </ul>
  )
}

export default Navbar