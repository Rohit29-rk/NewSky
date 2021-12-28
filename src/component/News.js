import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import Alert from './Alert'
import Footer from './Footer';


export class News extends Component {
   
    constructor() {
        super();
        this.state = {
            results: [],
            loading: false,
            page: 0,
            totalResults: []
        }

    }


    async componentDidMount() {
        if (this.props.category === 'spo') {
            
            let url = `https://newsdata.io/api/1/news?apikey=pub_3058bcd099932c95931004aa8f87093ede70&country=in&category=sports&q=cricket&page=0`;
            this.setState({ loading: true })
            
            let data = await fetch(url);
            let parsedData = await data.json()
            
            this.setState({


                results: parsedData.results,
                totalResults: parsedData.totalResults,
                loading: false
            })

        }
        else {
            let url = `https://newsdata.io/api/1/news?apikey=pub_3058bcd099932c95931004aa8f87093ede70&country=in&category=${this.props.category}&page=0`;
            this.setState({ loading: true })
            let data = await fetch(url);
            let parsedData = await data.json()
            
            this.setState({


                results: parsedData.results,
                totalResults: parsedData.totalResults,
                loading: false
            })
        }
    }
    previousclick = async () => {

        let url = `https://newsdata.io/api/1/news?apikey=pub_3058bcd099932c95931004aa8f87093ede70&country=in&category=${this.props.category}&page=${this.state.page - 1}`;
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()

        this.setState({
            page: this.state.page - 1,
            results: parsedData.results,
            loading: false
        })
    }
    nextclick = async () => {

        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 10)) {
        }
        else {
            let url = `https://newsdata.io/api/1/news?apikey=pub_3058bcd099932c95931004aa8f87093ede70&country=in&category=${this.props.category}&page=${this.state.page + 1}`;
            this.setState({ loading: true })
            let data = await fetch(url);

            let parsedData = await data.json()

            this.setState({
                page: this.state.page + 1,
                results: parsedData.results,
                loading: false
            })
        }

    }



    render() {
        return (

<>
            <Alert />
            <div className="container">


                <h1 className="text-center" style={{ marginTop: "40px" }}><b>{this.props.heading}</b></h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.results.map((element) => {
                        return <div className="col-md-4 mb-3" key={element.link}>
                            <Newsitem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.image_url} newsUrl={element.link} date={element.pubDate} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 0} className="btn btn-dark" onClick={this.previousclick}> &larr; Previous</button>
                    <button type="button" disabled={this.state.page + 2 > Math.ceil(this.state.totalResults / 10)} className="btn btn-dark" onClick={this.nextclick}>Next &rarr;</button>
                </div>
            </div>
            <Footer/>
            </>
        )
    }
}

export default News




