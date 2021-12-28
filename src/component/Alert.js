import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import back from './back.jpg'

export class Alert extends Component {


    render() {
        return (
            <div style={{height:"65px"}}>
                <div className="alert alert alert-dismissible" style={{  backgroundImage: `url(${back})`, color: '#000000' ,boxShadow: '10px 10px grey'}}>

                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>

                    <h4><strong><i className="fas fa-cloud-sun"></i></strong> For Check Weather Update &nbsp;&nbsp; <Link to="/weather" style={{ color: "#00c4ff" }}>Click here! <i className="far fa-arrow-alt-circle-right"></i></Link></h4>
                </div>
            </div>
        )
    }
}

export default Alert
