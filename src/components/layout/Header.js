import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
  console.log(props);
  return(
    <center>
      <header>
        <h1>Welcome from {props.name} </h1>
        <Link style={ls} to="/">Home</Link> | <Link style={ls} to= "/about"> About </Link>
        | <Link style={ls} to="/resume">Resume</Link>
      </header>
    </center>
  );
}

const ls = {
    color: '#000000',
    textDecoration: 'none'
}
export default Header;