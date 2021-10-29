import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/product-details" component={ ProductDetails } />
            <Route path="/cart" component={ Cart } />
            <Route exact path="/" component={ Home } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
