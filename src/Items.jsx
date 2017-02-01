import React,{ Component } from 'react';
import info from './Objects/pizzas.json';

export const PizzasItems = () => {
  let pizzas = info.pizzas;
  let pizzasitems = [];
  pizzas.map(
    (pizza) =>{
      let imgurl = "img/pizzas/"+pizza.id+".png";
      console.log(imgurl);
      pizzasitems.push(
        <div className="col-md-2 col-sm-2 portfolio-item">
            <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src={imgurl} className="img-responsive" alt=""/>
            </a>
            <div className="portfolio-caption">
                <h4>{pizza.nombre}</h4>
                <p className="text-muted">{pizza.detalle}</p>
            </div>
        </div>
      );
    }
  )
  return(
    <div>
        {pizzasitems}
    </div>
  )
}

export const EmpanadasItems = () => {
  let empanadas = info.empanadas;
  let empanadasitems = [];
  pizzas.map(
    (pizza) =>{
      let imgurl = "img/pizzas/"+pizza.id+".png";
      console.log(imgurl);
      pizzasitems.push(
        <div className="col-md-2 col-sm-2 portfolio-item">
            <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src={imgurl} className="img-responsive" alt=""/>
            </a>
            <div className="portfolio-caption">
                <h4>{pizza.nombre}</h4>
                <p className="text-muted">{pizza.detalle}</p>
            </div>
        </div>
      );
    }
  )
  return(
    <div>
        {empanadasitems}
    </div>
  )
}
