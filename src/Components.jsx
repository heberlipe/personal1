import React,{Component} from 'react';
import {Affix} from './affix.jsx';
import Scroll from 'react-scroll';

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

export class Nav extends Component{



  compomentDidMount(){
    Events.scrollEvent.register('begin', () => {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', () => {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  scrollToTop(){
    scroll.scrollToTop();
  };

  durationFn(deltaTop){
    return deltaTop;
  };

  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };

  render(){
    const offset = 51;
    return(
      <Affix
        id="mainNav"
        className="navbar navbar-default navbar-fixed-top navbar-custom"
        offset={offset}
        >
        <div className="container">
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <Link
                  activeClass="active"
                  className="navbar-brand page-scroll"
                  to="page-top"
                  href="#page-top"
                  spy={true}
                  smooth={true}
                  duration={1250}
                >Titulo</Link>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li>
                        <Link
                          className="page-scroll"
                          href="#nosotros"
                          activeClass="active"
                          spy={true}
                          to="nosotros"
                          smooth={true}
                          duration={1250}
                        >Nosotros</Link>
                    </li>
                    <li>
                        <Link
                          className="page-scroll"
                          href="#pizzas"
                          activeClass="active"
                          spy={true}
                          to="pizzas"
                          smooth={true}
                          duration={1250}
                          >Nuestras Pizzas</Link>
                    </li>
                    <li>
                        <Link
                          className="page-scroll"
                          href="#empanadas"
                          activeClass="active"
                          spy={true}
                          to="empanadas"
                          smooth={true}
                          duration={1250}
                          >Nuestras Empanadas</Link>
                    </li>
                    <li>
                        <Link
                          className="page-scroll"
                          href="#team"
                          activeClass="active"
                          spy={true}
                          to="team"
                          smooth={true}
                          duration={1250}
                        >Equipo</Link>
                    </li>
                    <li>
                        <Link
                          className="page-scroll"
                          href="#contact"
                          activeClass="active"
                          spy={true}
                          to="contact"
                          smooth={true}
                          duration={1250}
                        >Contacto</Link>
                    </li>
                </ul>
            </div>
        </div>
      </Affix>
    );
  }
}

export const Header = () => {
  return(
    <header id="header-section">
      <div className="container">
          <div className="intro-text">
              <div className="intro-lead-in">Bienvenidos</div>
              <div className="intro-heading">Alta pagina :D</div>
              <Link
                href="#nosotros"
                className="page-scroll btn btn-xl"
                activeClass="active"
                spy={true}
                to="nosotros"
                smooth={true}
                duration={1250}
              >Delivery</Link>
          </div>
      </div>
    </header>
  );
}

export const Nosotros = () => {
  return(
    <section id="nosotros" name="nosotros">
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
  return(
    <section id="pizzas" name="pizzas" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Nuestras Pizzas</h2>
                    <h3 className="section-subheading text-muted">Tenemos los mejores ingredientes para las mejores pizzas</h3>
                </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/roundicons.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 1</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/startup-framework.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 2</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/treehouse.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 3</h4>
                      <p className="text-muted">Pizza </p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/golden.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 4</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/escape.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 5</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/dreams.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 6</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/roundicons.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 7</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/startup-framework.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 8</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/treehouse.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 9</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/golden.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 10</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/escape.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 11</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
              <div className="col-md-2 col-sm-2 portfolio-item">
                  <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/dreams.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza 12</h4>
                      <p className="text-muted">Pizza</p>
                  </div>
              </div>
            </div>
        </div>
    </section>
  );
}

export const Empanadas = () => {
  return(
    <section id="empanadas" name="empanadas">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Nuestras Empanadas</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal1" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/roundicons.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Round Icons</h4>
                      <p className="text-muted">Graphic Design</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal2" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/startup-framework.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Startup</h4>
                      <p className="text-muted">Website Design</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal3" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/treehouse.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Treehouse</h4>
                      <p className="text-muted">Website Design</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/golden.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Golden</h4>
                      <p className="text-muted">Website Design</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/escape.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Escape</h4>
                      <p className="text-muted">Website Design</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/dreams.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza</h4>
                      <p className="text-muted">Website Design</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal4" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/golden.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Golden</h4>
                      <p className="text-muted">Website Design</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal5" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/escape.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Escape</h4>
                      <p className="text-muted">Website Design</p>
                  </div>
              </div>
              <div className="col-md-4 col-sm-4 portfolio-item">
                  <a href="#portfolioModal6" className="portfolio-link" data-toggle="modal">
                      <div className="portfolio-hover">
                          <div className="portfolio-hover-content">
                              <i className="fa fa-plus fa-3x"></i>
                          </div>
                      </div>
                      <img src="img/portfolio/dreams.png" className="img-responsive" alt=""/>
                  </a>
                  <div className="portfolio-caption">
                      <h4>Pizza</h4>
                      <p className="text-muted">Website Design</p>
                  </div>
              </div>
            </div>
        </div>
    </section>
  );
}

export const Team = () => {
  return(
    <section id="team" name="team" className="bg-light-gray">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-4">
                    <div className="team-member">
                        <img src="img/team/1.jpg" className="img-responsive img-circle" alt=""/>
                        <h4>Persona</h4>
                        <p className="text-muted">Puesto</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member">
                        <img src="img/team/2.jpg" className="img-responsive img-circle" alt=""/>
                        <h4>persona</h4>
                        <p className="text-muted">puesto</p>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="team-member">
                        <img src="img/team/3.jpg" className="img-responsive img-circle" alt=""/>
                        <h4>Persona</h4>
                        <p className="text-muted">puesto</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 text-center">
                    <p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export const Contacto = () => {
  return(
    <section id="contact" name="contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="section-heading">Contacto</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="telefono" >12345678</h1>
                </div>
            </div>
        </div>
    </section>
  );
}

export const Footer = () => {
  return(
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <span className="copyright">Copyright &copy; asdasd 2017</span>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline social-buttons">
                        <li>
                        </li>
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="list-inline quicklinks">
                        <li>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>

  );
}

export const Modals = () => {
  return(
    <div>
      <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                  <h2>Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-responsive img-centered" src="img/portfolio/roundicons-free.png" alt=""/>
                                  <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                                  <p>
                                      <strong>Want these icons in this portfolio item sample?</strong>You can download 60 of them for free, courtesy of <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">RoundIcons.com</a>, or you can purchase the 1a500 icon set <a href="https://getdpd.com/cart/hoplink/18076?referrer=bvbo4kax5k8ogc">here</a>.</p>
                                  <ul className="list-inline">
                                      <li>Date: July 2014</li>
                                      <li>Client: Round Icons</li>
                                      <li>Category: Graphic Design</li>
                                  </ul>
                                  <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                  <h2>Project Heading</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-responsive img-centered" src="img/portfolio/startup-framework-preview.png" alt=""/>
                                  <p><a href="http://designmodo.com/startup/?u=787">Startup </a> is a website builder for professionals. Startup Framework contains components and complex blocks (PSD+HTML Bootstrap themes and templates) which can easily be integrated into almost any design. All of these components are made in the same style, and can easily be integrated into projects, allowing you to create hundreds of solutions for your future projects.</p>
                                  <p>You can preview Startup <a href="http://designmodo.com/startup/?u=787">here</a>.</p>
                                  <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                  <h2>Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-responsive img-centered" src="img/portfolio/treehouse-preview.png" alt=""/>
                                  <p>Treehouse is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. This is bright and spacious design perfect for people or startup companies looking to showcase their apps or other projects.</p>
                                  <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/treehouse-free-psd-web-template/">FreebiesXpress.com</a>.</p>
                                  <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                  <h2>Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-responsive img-centered" src="img/portfolio/golden-preview.png" alt=""/>
                                  <p>Start Bootstrap's Agency theme is based on Golden, a free PSD website template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Golden is a modern and clean one page web template that was made exclusively for Best PSD Freebies. This template has a great portfolio, timeline, and meet your team sections that can be easily modified to fit your needs.</p>
                                  <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/golden-free-one-page-web-template/">FreebiesXpress.com</a>.</p>
                                  <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>


      <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                  <h2>Project Name</h2>
                                  <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                                  <img className="img-responsive img-centered" src="img/portfolio/escape-preview.png" alt=""/>
                                  <p>Escape is a free PSD web template built by <a href="https://www.behance.net/MathavanJaya">Mathavan Jaya</a>. Escape is a one page web template that was designed with agencies in mind. This template is ideal for those looking for a simple one page solution to describe your business and offer your services.</p>
                                  <p>You can download the PSD template in this portfolio sample item at <a href="http://freebiesxpress.com/gallery/escape-one-page-psd-web-template/">FreebiesXpress.com</a>.</p>
                                  <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Close Project</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex="-1" role="dialog" aria-hidden="true">
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
                                  <h2>Pizza</h2>
                                  <p className="item-intro text-muted">
                                    Esto es una pizza :o
                                  </p>
                                  <img className="img-responsive img-centered" src="img/portfolio/dreams-preview.png" alt=""/>
                                  <p>Esto es un parrafo que tiene que decir que la pizza es muy rica (siempre son ricas)</p>
                                  <p>Este es otro parrafo mas cortito... creo...</p>
                                  <button type="button" className="btn btn-primary" data-dismiss="modal"><i className="fa fa-times"></i> Cerrar Pizza</button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
