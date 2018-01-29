import React, { Component } from 'react';
import PartyMemberList from './containers/PartyMemberList';
import './App.css';

class App extends Component {
  render() {
    return (
      <section>
        <PartyMemberList />
      </section>
    );
  }
}

export default App;
