import React, { Component } from 'react';

export default class Navheader extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-primary first-layer">
                    <div className="container">
                        <ul className="list-inline mr-auto">
                            <li className="list-inline-item"><a href="#">Login</a></li>
                            <li className="list-inline-item"><a href="#" className="ml-sm-3">Register</a></li>
                        </ul>
                        <ul className="float-right list-inline mt-2 mt-md-0">
                            <li className="list-inline-item">a</li>
                            <li className="list-inline-item">a</li>
                        </ul>
                    </div>
                </nav>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <div className="container">
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">Brand</a>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Link</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#">Disabled</a>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                      </div>
                    </div>
                </nav>
            </div>
        )
    }

}
