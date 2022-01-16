import React from "react";
import Route1 from "./Route1";
import Route2 from "./Route2";
import Route3 from "./Route3";
import Route4 from "./Route4";
import Route5 from "./Route5";
import {Route, Switch } from 'react-router-dom';
const App = () => {
    return ( 
        <>
        
        <Switch>
          <Route path="/" component = {Route1} />
          <Route path="/Route2" component ={Route2} />
          <Route path="/Route3" component = {Route3} />
          <Route path="/Route4" component ={Route4} />
          <Route path="/Route5" component ={Route5} />
        </Switch>     
        
        </>
    )
};

export default App;