import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'  

import {Provider} from 'react-redux'
import store from './components/redux/store'

import Login from './components/auth/Login'
import ProductParent from './components/Product/productParent'
import CategoryParent from './components/Dasboard/Category/categoryParent'
import ProductDash from './components/Dasboard/ProductDash'
import UserParent from './components/Dasboard/user/userParent'

function App() {
  return (
    <Provider store={store}>
      <Router>
          <Route exact path="/" component={ProductParent} />
          <Route path="/login" component={Login} />
          <Route path="/newHome" component={ProductParent} />
          <Route path="/Dashboard/Category" component={CategoryParent} />
          <Route path="/Dashboard/Product" component={ProductDash} />
          <Route path="/Dashboard/User" component={UserParent} />
      </Router>
    </Provider>
  );
}

export default App;
