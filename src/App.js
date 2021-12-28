import './App.css'
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import Weather from './component/Weather'


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";





export default class App extends Component {

  render() {





    return (
      <>
        <div>
          <Router>
          
            <Navbar />
            

            
            <Switch>

              <Route exact path="/"><News key="general" pagesize={6} category="top" heading="Top Headlines" /></Route>
              <Route exact path="/business"><News key="business" pagesize={6} category="business" heading="Business News" /></Route>
              <Route exact path="/entertainment"><News key="entertainment" pagesize={6} category="entertainment" heading="Entertainment News" /></Route>
              <Route exact path="/politics"><News key="food" pagesize={6} category="politics" heading="Politics News" /></Route>
              <Route exact path="/health"><News key="health" pagesize={6} category="health" heading="Health News" /></Route>
              <Route exact path="/science"><News key="science" pagesize={6} category="science" heading="Science News" /></Route>
              <Route exact path="/sports"><News key="sports" pagesize={6} category="sports" heading="Sports News" /></Route>
              <Route exact path="/technology"><News key="technology" pagesize={6} category="technology" heading="Technology News" /></Route>
              <Route exact path="/cricket"><News key="sports" pagesize={6} category="spo" heading="Cricket News" /></Route>
              <Route exact path="/weather"><Weather /></Route>

            </Switch>
           
            
          </Router>
          
        </div>
        
          

      </>
    )
  }
}
