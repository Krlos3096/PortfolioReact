import React, { Component } from 'react';
import './NavBarComponent.css';
import home from '../../assets/home.svg'

class NavBarComponent extends Component{
constructor(){
    super();
}
 render() {
        return (
          <ul class="horizontal">
            <li className='home'><img src={home}/></li>
            <li><a href="#">Experiencia</a></li>
            <li><a href="#">Estudios</a></li>
            <li><a href="#">Habilidades</a></li>
            <li><a href="#">Contactame</a></li>
          </ul>
        )
    }
}
export default NavBarComponent;