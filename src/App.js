import React, { Component } from 'react';
import PartyMemberList from './containers/PartyMemberList';
import './App.css';
import DATA from './data';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { data: [] };
  }
  render() {
    return (
      <section>
        <PartyMemberList data={ DATA } />
      </section>
    );
  }
}

export default App;
