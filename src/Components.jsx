import React from 'react';

export const Pizza = (img, title, href) => {

}

export const Nav = () => {
  return(
    <nav id="mainNav" classNameNameName="navbar navbar-default navbar-custom navbar-fixed-top">
      <div classNameNameName="container">
          <div classNameNameName="navbar-header page-scroll">
              <button type="button" classNameNameName="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span classNameNameName="sr-only">Toggle navigation</span> Menu <i classNameNameName="fa fa-bars"></i>
              </button>
              <a classNameNameName="navbar-brand page-scroll" href="#page-top">Titulo</a>
          </div>

          <div classNameNameName="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul classNameNameName="nav navbar-nav navbar-right">
                  <li classNameNameName="hidden">
                      <a href="#page-top"></a>
                  </li>
                  <li>
                      <a classNameNameName="page-scroll" href="#nosotros">Nosotros</a>
                  </li>
                  <li>
                      <a classNameNameName="page-scroll" href="#pizzas">Nuestras Pizzas</a>
                  </li>
                  <li>
                      <a classNameNameName="page-scroll" href="#empanadas">Nuestras Empanadas</a>
                  </li>
                  <li>
                      <a classNameNameName="page-scroll" href="#team">Equipo</a>
                  </li>
                  <li>
                      <a classNameNameName="page-scroll" href="#contact">Contacto</a>
                  </li>
              </ul>
          </div>
      </div>
    </nav>
  );
}

export const Header = () => {
  return(
    <header id="header-section">
      <div classNameName="container">
          <div classNameName="intro-text">
              <div classNameName="intro-lead-in">Bienvenidos</div>
              <div classNameName="intro-heading">Alta pagina :D</div>
              <a href="#nosotros" classNameName="page-scroll btn btn-xl">Delivery</a>
          </div>
      </div>
    </header>
  );
}

export const Nosotros = () => {
  return (
    <section id="nosotros">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Nosotros</h2>
                    <h3 className="section-subheading text-muted">Un poco de lo que hacemos...</h3>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-shopping-cart fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">E-Commerce</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Responsive Design</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
                <div className="col-md-4">
                    <span className="fa-stack fa-4x">
                        <i className="fa fa-circle fa-stack-2x text-primary"></i>
                        <i className="fa fa-lock fa-stack-1x fa-inverse"></i>
                    </span>
                    <h4 className="service-heading">Web Security</h4>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export const Pizzas = () => {

}

export const Empanadas = () => {

}

export const Team = () => {

}

export const Contacto = () => {

}

export const Footer = () => {
  
}
