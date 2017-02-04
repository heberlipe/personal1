import React,{Component} from 'react';
import {EmpanadasModals,PizzasModals,PizzasItems,EmpanadasItems} from './Items';
import {Affix} from './affix.jsx';
import Scroll from 'react-scroll';
import { WindowResizeListener } from 'react-window-resize-listener';

var {Link,Events,animateScroll,scrollSpy}  = Scroll;

export class Nav extends Component{

    constructor(){
        super();
        this.state = {
            'collapsable' : false
        }
        this.updateState = this.updateState.bind(this);
    }

  compomentDidMount(){
    Events.scrollEvent.register('begin', () => {
      console.log("begin", arguments);
    });
    Events.scrollEvent.register('end', () => {
      console.log("end", arguments);
    });
    scrollSpy.update();
  }

  updateState(){
      
      let {collapsable} = this.state;
      if (document.documentElement.clientWidth < 991 && collapsable != true){
          this.setState({
              collapsable : true
          })
      }
      if (document.documentElement.clientWidth > 991 && collapsable != false){
          this.setState({
              collapsable : false
          })
      }
  }

  scrollToTop(){
    animateScroll.scrollToTop();
  };

  durationFn(deltaTop){
    return deltaTop;
  };

  componentWillUnmount(){
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  };

  render(){
    let {collapsable} = this.state;
    const offset = 51;
    let id;
    if(collapsable){
        id = "bs-example-navbar-collapse-1";
    }else{
        id = "h-display-normal";
    }
    return(
      <Affix
        id="mainNav"
        className="navbar navbar-default navbar-fixed-top navbar-custom"
        offset={offset}
        >
        <WindowResizeListener onResize={() => {
            this.updateState();
        }}/>
        <div className="container">
            <div className="navbar-header page-scroll">
                <button 
                    type="button" 
                    className="navbar-toggle" 
                    data-toggle="collapse" 
                    data-target="#bs-example-navbar-collapse-1"
                    onClick={()=>this.render()}>
                        <span className="sr-only">Toggle navigation</span>
                        <i className="fa fa-bars"></i>
                </button>
                <Link
                    activeClass="active"
                    className="navbar-brand page-scroll"
                    to="page-top"
                    href="#page-top"
                    spy={true}
                    smooth={true}
                    duration={1250}>
                        
                        Las Pizzeritas
                </Link>
            </div>
            <div className="collapse navbar-collapse" id={id}>
                <ul className="nav navbar-nav navbar-right">
                    <li className="hidden">
                        <a href="#page-top"></a>
                    </li>
                    <li data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
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
                    <li data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
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
                    <li data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
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
                    <li data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
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
                    <li data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
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
              <div className="intro-lead-in">Casa de Pizzas</div>
              <div className="intro-heading">Las Pizzeritas</div>
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
                <PizzasItems/>
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
                <EmpanadasItems/>
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
      <PizzasModals/> 
      <EmpanadasModals/>
    </div>
  );
}
