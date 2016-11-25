import React,{ Component } from 'react';
import {
  Nav,
  Header,
  Nosotros,
  Pizzas,
  Empanadas,
  Team,
  Contacto,
  Footer,
  Modals
} from './Components.jsx'

export class Principal extends Component{
  render(){
    return(
        <div  id="page-top" className="index">
          <Nav/>
          <Header/>
          <Nosotros/>
          <Pizzas/>
          <Empanadas/>
          <Team/>
          <Contacto/>
          <Footer/>
          <Modals/>
        </div>
    )
  }
}
