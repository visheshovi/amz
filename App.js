import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import { useStateValue } from "./StateProvider";
import Login from "./Login";
//import Payment from "./Payment";

function App() {
  const [{}, dispatch] = useStateValue();

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            
          </Route>
          <Route path="/login">
          <Login /> 
            
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            
        
             
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
