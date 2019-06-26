import React from 'react'
// import { tsPropertySignature } from '@babel/types';





const Navbar = props => {

    return (
    
      
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <p className="navbar-brand">Clicky Game</p>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <p className="nav-link"> BT21 Version  | <span className="sr-only">(current)</span></p>
      </li>
      <li>
      <p className="nav-link" id="prompt"> Prompt : {props.prompt} <span className="sr-only"></span></p>
      </li>
      </ul>
      <span className="navbar-text">
        <p id="navScore" className="nav-link" >Score: {props.countClick} </p>  
      </span>

      <span className="navbar-text">
      <p id="navTotal" className="nav-link">Top Score:{props.topScore}</p>
          </span>
    
    {/* <span className="navbar-text">
      Navbar text with an inline element
    </span> */}

</nav>
        </>
    )
}

export default Navbar