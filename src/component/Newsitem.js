import React, { Component } from 'react'


export class Newsitem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl,date } = this.props;
        
        return (
            
            <div className='my-3'>
                <div className="card" style={{ border: "1px solid black" }}>
                    
                    <img src={!imageUrl ? "https://source.unsplash.com/random/1920x1080/?{title}" : imageUrl} className="card-img-top" alt="..." style={{height: "190px", borderBottom: "1px solid black" }} />
                    <div className="card-body">
                        <h5 className="card-title"><b>{title}...</b></h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>Published On - {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
