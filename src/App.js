import React, { Component } from 'react';

import Welcome from './Component/Welcome/Welcome';
import Clock from './Component/Clock/Clock';
import Contact from './Component/Contact/Contact';
import fourOneFour from './Component/fourOneFour/fourOneFour'
import Navigation from "./Component/Navigation/Navigation";
import {Route , Switch} from "react-router-dom";
// import jeopardy from "./Component/jeopardy/jeopardy"

class App extends Component {
  render (){
    return (
      <div className="App">
        <Navigation/>
          <Switch>
              <Route
                  exact 
                  path ="/" 
                  render= {(props) => <Welcome {...props} name= "Berhanu"/>}
              />
              <Route path="/clock" component={Clock}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/welcome/:name" component={Welcome}/>
              <Route component = {fourOneFour}/>              
          </Switch>
      </div>
    );
    }
}
export default App;


