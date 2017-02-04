import React,{ Component } from 'react';
import info from './Objects/pizzas.json';

export const PizzasItems = () => {
  let pizzas = info.pizzas;
  let pizzasitems = [];
  pizzas.map(
    (pizza) =>{
      let imgurl = "img/pizzas/"+pizza.id+".png";
      let modal = "#pizza"+pizza.id;
      pizzasitems.push(
        <div className="col-md-2 col-sm-2 portfolio-item" key={modal}>
            <a href={modal} className="portfolio-link" data-toggle="modal">
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
  empanadas.map(
    (empanada) =>{
      let imgurl = "img/empanadas/"+empanada.id+".png";
      let modal = "#empanada"+empanada.id;
      empanadasitems.push(
        <div className="col-md-4 col-sm-4 portfolio-item" key={modal}>
            <a href={modal} className="portfolio-link" data-toggle="modal">
                <div className="portfolio-hover">
                    <div className="portfolio-hover-content">
                        <i className="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src={imgurl} className="img-responsive" alt=""/>
            </a>
            <div className="portfolio-caption">
                <h4>{empanada.nombre}</h4>
                <p className="text-muted">{empanada.detalle}</p>
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

export const PizzasModals = () => {
  let pizzas = info.pizzas;
  let pizzasModals = [];
  pizzas.map(
    (pizza) =>{
      let imgurl = "img/pizzas/"+pizza.id+".png";
      let id = "pizza"+pizza.id;
      pizzasModals.push(
        <div className="portfolio-modal modal fade" key={id} id={id} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-dismiss="modal">
                      <div className="lr">
                          <div className="rl">
                          </div>
                      </div>
                  </div>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8 col-lg-offset-2">
                              <div className="modal-body">
                                  <h2>{pizza.nombre}</h2>
                                  <p className="item-intro text-muted">Descripcion</p>
                                  <img 
                                    className="img-responsive img-centered"
                                    src={imgurl}
                                    alt=""/>
                                  <p>Texto comun!</p>
                                  <p>
                                      <strong>Texto en negrita :D</strong>... mas Texto
                                  </p>
                                  <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i>Cerrar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      );
    }
  )
  return(
    <div>
        {pizzasModals}
    </div>
  )
}

export const EmpanadasModals = () => {
  let empanadas = info.empanadas;
  let empanadasModals = [];
  empanadas.map(
    (empanada) =>{
      let imgurl = "img/empanadas/"+empanada.id+".png";
      let id = "empanada"+empanada.id;
      empanadasModals.push(
        <div className="portfolio-modal modal fade" key={id} id={id} tabIndex="-1" role="dialog" aria-hidden="true">
          <div className="modal-dialog">
              <div className="modal-content">
                  <div className="close-modal" data-dismiss="modal">
                      <div className="lr">
                          <div className="rl">
                          </div>
                      </div>
                  </div>
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-8 col-lg-offset-2">
                              <div className="modal-body">
                                  <h2>{empanada.nombre}</h2>
                                  <p className="item-intro text-muted">Descripcion</p>
                                  <img 
                                    className="img-responsive img-centered"
                                    src={imgurl}
                                    alt=""/>
                                  <p>Texto comun!</p>
                                  <p>
                                      <strong>Texto en negrita :D</strong>... mas Texto
                                  </p>
                                  <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i>Cerrar</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      );
    }
  )
  return(
    <div>
        {empanadasModals}
    </div>
  )
}