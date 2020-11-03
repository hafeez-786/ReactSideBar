import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Reports from './Pages/Report';
import Products from './Pages/Product';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/report' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>
      </Router>
    </>
  );
}

export default App;