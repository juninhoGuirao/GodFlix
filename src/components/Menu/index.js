import React from 'react';
import Logo from '../../assents/img/Logo.png';
import './Menu.css'  
import Button from '../Button'
//import ButtonLink from '../ButtonLink';
function Menu ( ) {
    return(
    <nav className= "Menu">
        <a href="/"> 
      <img className='logo' src={Logo} alt="Godflix logo">  
      </img>
      </a>
      <Button as="a" href="/">
          Adicionar Video
      </Button>
      </nav>
    );
}
export default Menu;