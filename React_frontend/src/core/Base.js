import React from "react";
import Menu from "./Menu";
import "./Base.css";
//the default base component at the bottom of the page

const Base = ({
  title = "My Title",
  description = "My description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"/>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet"/>

    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.19.1/css/mdb.min.css" rel="stylesheet"/>

      <Menu />
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="page-footer  font-small pt-4">
        <div className="container text-center text-md-left">
        <div class="row text-center text-md-left mt-3 pb-3">
         <div class="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Taxila Book Store</h6>
        <p>"An Online Book Store. Bringing you the best of the titles and pieces of texts, right at your doorstep. With 24X7 free home delivery."</p>
      </div>
        <hr className="w-100 clearfix d-md-none"/>

        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Money</h6>
       <p>
          <a href="#">Become a seller</a>
        </p> 
        <p>
          <a href="#">Advertise your product</a>
        </p>
        <p>
          <a href="#">Sponser us</a>
        </p>
       </div>
       <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
        <h6 class="text-uppercase mb-4 font-weight-bold">Get to Know Us</h6>
          <p>
          <a href="#">About us</a>
        </p> 
        <p>
          <a href="#">Careers</a>
        </p> 
        <p>
          <a href="#">Press Releases</a>
        </p> 
        </div>
         <hr className="w-100 clearfix d-md-none"/>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
        <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
        <p>
          <i className="fas fa-home mr-3"></i>Jorhat, Assam 7856001, India</p>
        <p>
          <i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
        <p>
          <i className="fas fa-phone mr-3"></i> + 91 234 567 88</p>
        <p>
          <i className="fas fa-print mr-3"></i> + 91 234 567 89</p>
      </div>
      </div>

        <hr/>

 
    <div className="row d-flex align-items-center">

     
      <div className="col-md-7 col-lg-8">

      
        <p className="text-center text-md-left">© 2020 Copyright:
          <a href="#">
            <strong>TaxilaBookStore.com</strong>
          </a>
        </p>

      </div>
      

      
      <div className="col-md-5 col-lg-4 ml-lg-0">

        
        <div className="text-center text-md-right">
          <ul className="list-unstyled list-inline">
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-facebook-f"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-google-plus-g"></i>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="btn-floating btn-sm rgba-white-slight mx-1">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>



          </div>
          </div>
      </footer>
    </div>

  );
};

export default Base;
