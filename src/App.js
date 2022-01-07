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

              <Route exact path="/"><News key="general" category="top" heading="Top Headlines" /></Route>
              <Route exact path="/business"><News key="business" category="business" heading="Business News" /></Route>
              <Route exact path="/entertainment"><News key="entertainment" category="entertainment" heading="Entertainment News" /></Route>
              <Route exact path="/politics"><News key="food" category="politics" heading="Politics News" /></Route>
              <Route exact path="/health"><News key="health" category="health" heading="Health News" /></Route>
              <Route exact path="/science"><News key="science" category="science" heading="Science News" /></Route>
              <Route exact path="/sports"><News key="sports" category="sports" heading="Sports News" /></Route>
              <Route exact path="/technology"><News key="technology" category="technology" heading="Technology News" /></Route>
              <Route exact path="/cricket"><News key="sports" category="spo" heading="Cricket News" /></Route>
              <Route exact path="/weather"><Weather /></Route>

            </Switch>
           
            
          </Router>
          
        </div>
        
          

      </>
    )
  }
}
