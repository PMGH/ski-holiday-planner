import React, { Component } from 'react';
import PartyMemberList from './containers/PartyMemberList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = { url: 'http://localhost:3001/api/members', data: [] };
  }

  componentDidMount(){
    const xhr = new XMLHttpRequest();
    xhr.open('GET', this.state.url);
    xhr.addEventListener('load', () => {
      if (xhr.status === 200){
        const apiData = JSON.parse(xhr.response);
        this.setState({ data: apiData });
        console.log(apiData);
      }
    });
    xhr.send();
  }

  render() {
    return (
      <section>
        <PartyMemberList data={ this.state.data } />
      </section>
    );
  }
}

export default App;
