import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'  

import {Provider} from 'react-redux'
import store from './components/redux/store'

import Home from './components/Home/Home'
import Login from './components/auth/Login'
import productParent from './components/Product/productParent'
// import NewNavbar from './components/Layout/Navbar'

function App() {
  return (
    <Provider store={store}>
      <Router>
          {/* <NewNavbar /> */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/newHome" component={productParent} />
      </Router>
    </Provider>
  );
}

export default App;
