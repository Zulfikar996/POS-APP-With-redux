import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'  

import {Provider} from 'react-redux'
import store from './components/redux/store'

import Home from './components/Home/Home'
import Login from './components/auth/Login'
import ProductParent from './components/Product/productParent'
// import NewNavbar from './components/Layout/Navbar'
import CategoryParent from './components/Category/categoryParent'

function App() {
  return (
    <Provider store={store}>
      <Router>
          {/* <NewNavbar /> */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/newHome" component={ProductParent} />
          <Route path="/Category" component={CategoryParent} />
      </Router>
    </Provider>
  );
}

export default App;
