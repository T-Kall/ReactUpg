import React from 'react';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Navigation from './components/navigation/Navigation';

import LandingPage from './views/LandingPage';
import News from './views/News';
import Products from './views/product/Products';
import ProductDetails from './views/product/ProductDetails';

import NotFound from './views/NotFound';


function App() {
  return (

    <BrowserRouter>
      <Navigation />

      <div className="container mt-3">

        <Switch>
          <Route path="/" exact component={LandingPage} /> 
          <Route path="/news" exact component={News} /> 
          <Route path="/products" exact component={Products} />
          <Route path="/products/details/:id" exact component={ProductDetails} /> 
       
         

          <Route path="*" component={NotFound} />
        </Switch>
        
        
      </div>

    </BrowserRouter>


  );
}

export default App;
