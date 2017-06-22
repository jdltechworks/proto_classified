import React, { Component } from 'react';

export default class Navheader extends Component {


   handleClick = (e) => {

   };

  render() {
    return (
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                Brand
              </a>
            </div>

            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-addon"><i className="fa fa-search"></i></div>
                  <input type="text" className="form-control" id="exampleInputAmount" placeholder="Place" />
                </div>
              </div>

              <div className="btn-group">
                <button type="button" className="no-radius btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="fa fa-calendar"></span> Anytime
                </button>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
              <div className="btn-group ">
                <button type="button" className="text-left btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span className="fa fa-group"></span> 1 Guest
                </button>
                <ul className="dropdown-menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Separated link</a></li>
                </ul>
              </div>
            </form>

            <ul className="nav navbar-nav navbar-right">
              <li><a href="#">Become a Host</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Sign Up</a></li>
              <li><a href="#">Log In</a></li>

            </ul>
          </div>



        </nav>



    );
  }

}
