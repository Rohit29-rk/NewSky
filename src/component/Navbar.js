import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import lojo from './logo.jpg'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark">
                    <img src={lojo} className="logo" alt="logo" height="50px" width='50px'></img>
                    <Link className="navbar-brand" to="/">NewSky</Link>
                    <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item dropdown ">
                                <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categories
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li className="nav-item mx-2"><Link className="nav-link" to="/business">Business</Link></li>
                                    <li className="nav-item mx-2"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                                    <li className="nav-item mx-2"><Link className="nav-link" to="/politics">Politics</Link></li>
                                    <li className="nav-item mx-2"><Link className="nav-link" to="/health">Health</Link></li>
                                    <li className="nav-item mx-2"><Link className="nav-link" to="/science">Science</Link></li>
                                    <li className="nav-item mx-2"><Link className="nav-link" to="/sports">Sports</Link></li>
                                    <li className="nav-item mx-2"><Link className="nav-link" to="/technology">Technology</Link></li>
                                    <li className="nav-item mx-2"><Link className="nav-link" to="/cricket">Cricket</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/weather">Weather</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" style={{height:"unset"}}/>
                            <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar
