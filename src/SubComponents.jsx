import React,{Component} from 'react';

export const Item = (props) =>{
  let url = "img/portfolio/"
  let ext = ".png"
  return(
    <div className="col-md-2 col-sm-2 portfolio-item">
        <a href={props.modal}
          className="portfolio-link"
          data-toggle="modal">
            <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                    <i className="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img
              src={`${url}${props.title}${ext}`}
              className="img-responsive"
              alt=""
            />
        </a>
        <div className="portfolio-caption">
            <h4>{props.title}</h4>
            <p className="text-muted">{props.subtitle}</p>
        </div>
    </div>
  )
}
