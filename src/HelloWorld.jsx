import React,{ Component } from 'react';

export class Nav extends Component{
    render(){
      	return(

            <div className="container">
                <div className="navbar-header page-scroll">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                    </button>
                    <a className="navbar-brand page-scroll" href="#page-top">Titulo</a>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="hidden">
                            <a href="#page-top"></a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#nosotros">Nosotros</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#pizzas">Nuestras Pizzas</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#empanadas">Nuestras Empanadas</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#team">Equipo</a>
                        </li>
                        <li>
                            <a className="page-scroll" href="#contact">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>

      	);
    }
}

export class Header extends Component{
  render(){
    return(
      <div className="container">
          <div className="intro-text">
              <div className="intro-lead-in">Bienvenidos</div>
              <div className="intro-heading">Alta pagina :D</div>
              <a href="#nosotros" className="page-scroll btn btn-xl">Delivery</a>
          </div>
      </div>
    );
  }
}
