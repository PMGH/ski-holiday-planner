import React, { Component } from 'react';
import Navbar from './navigation/Navbar';
import Home from './navigation/Home';
import Members from './navigation/Members';
import Flights from './navigation/Flights';
import Transfers from './navigation/Transfers';
import Accommodation from './navigation/Accommodation';
import Passes from './navigation/Passes';
import Equipment from './navigation/Equipment';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/members" component={Members} />
          <Route path="/flights" component={Flights} />
          <Route path="/transfers" component={Transfers} />
          <Route path="/accommodation" component={Accommodation} />
          <Route path="/passes" component={Passes} />
          <Route path="/equipment" component={Equipment} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
