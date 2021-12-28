import React, { Component } from 'react'
import './we.css'

export class weather extends Component {

    constructor() {
        super();
        this.state = {
            city: 'Mumbai',
            speed: '29',
            country: 'In',
            temp: 29,
            temp_min: 15,
            temp_max: 30,
            hum: 29,
            main: 'Cloudy',
            icon: 'https://openweathermap.org/img/w/03d.png',
            error: ""
        }

    }

   set = async () => {
        let a = document.getElementById('inp').value;
        if (a === '') {
            this.setState({

                error: window.alert("Please Enter  City...")

            })
        };

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=09897dfbb5e767857006e291a5eaeb8d`;
        let data = await fetch(url);
        let parsedData = await data.json()

        else{
            let ma = parsedData.weather[0].description
            let mn = ma.charAt(0).toUpperCase() + ma.slice(1)
            let ioc = 'https://openweathermap.org/img/w/' + parsedData.weather[0].icon + '.png '
            this.setState({
                temp: parsedData.main.temp,
                country: parsedData.sys.country,
                speed: parsedData.wind.speed,
                city: parsedData.name,
                temp_min: parsedData.main.temp_min,
                temp_max: parsedData.main.temp_max,
                hum: parsedData.main.humidity,
                main: mn,
                icon: ioc,
                error: ""

            })

        }
        

    }

    render() {
        return (
            <>
                <div className='main'>

                    <div className='design'>
                        <p className='deg' style={{ position: "absolute", bottom: '80px', left: "25px", fontSize: '50px' }}> {this.state.temp}&deg;</p>
                        <h3 style={{ position: "absolute", bottom: '120px', marginLeft: "170px", }}>{this.state.city}</h3>
                        <p style={{ position: "absolute", bottom: '90px', marginLeft: "170px", fontSize: '1.2rem', fontWeight: '300' }}>Min-temp: {this.state.temp_min}&deg; | Max-temp: {this.state.temp_max}&deg;</p>
                    </div>

                    <div className="" style={{ display: "flex", justifyContent: "right", flexDirection: "row" }}>
                        <div className='box'>
                            <div className="container" style={{ display: "flex", justifyContent: "center", flexDirection: "row", marginTop: "25px" }}>
                                <div className="inputData">
                                    <input id="inp" type="search" placeholder="Enter City" style={{ border: "none", outline: "none", height: "40px", width: "300px", fontSize: "large", paddingLeft: "10px", backgroundColor: "transparent", borderBottom: "1px solid white", color: 'white' }} className='inputFeild' />
                                    <button className="btro btn btn-warning mx-2" style={{ color: "black", outline: 'none!important' }} onClick={this.set} > <i className="fas fa-search"></i> Search</button>
                                </div>

                            </div>
                            <div id='weathercon'>
                                <img className="fas" src={this.state.icon} alt='https://openweathermap.org/img/w/03d.png' />

                            </div>
                            <h2 className='cond text-center'>{this.state.main}</h2>

                            <div className="info">
                                <h2 className="temp mb-2">
                                    {this.state.temp}&deg;C
                                </h2>
                                <h2 className="location">

                                    {this.state.city},{this.state.country}
                                </h2>
                                <div style={{ borderTop: "0.5px solid white" }}>
                                    <h3 className='wet text-center' style={{ fontWeight: '600', marginBottom: '0!important' }}>Weather Details</h3>
                                    <div >
                                        <h5 className="roh min text-center mx-5 mt-4 "><i class="fas fa-temperature-low"></i> Min-temp- {this.state.temp_min}&deg;C </h5>
                                        <h5 className="roh text-center mx-5 "><i class="fas fa-temperature-high"></i> Max -temp- {this.state.temp_max}&deg;C </h5>
                                        <h5 className='roh text-center mx-5 '><span class="iconify" data-icon="wi:humidity"></span> Humidity- {this.state.hum}%</h5>
                                        <h5 className='roh text-center mx-5'><i class="fas fa-wind"></i> Wind- {this.state.speed} m/s</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default weather
