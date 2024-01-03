import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar(props) {
  return (
    
       <nav className="navbar navbar-default navbar-custom navbar-fixed-top bg-dark">
        <div className="container-fluid">
            
            <div className="navbar-header page-scroll">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    Menu <i className="fa fa-bars"></i>
                </button>
                <Link className="navbar-brand" to="index.html">Start Bootstrap</Link>
            </div>

            
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li >
                    <li className="nav-item" >
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/post"> Post</Link>
                    </li>
                    <li className="nav-item" >
                        <Link className="nav-link" to="/create">create post</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link onClick={props.login} className="nav-link" to="/login">
                            {props.status ?"logout":"login"}</Link>

                    </li>
                </ul>
            </div>
        
        </div>
    </nav>


  )
}
