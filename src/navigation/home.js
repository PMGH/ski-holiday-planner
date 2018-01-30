import React, { Component } from 'react';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { url: 'http://localhost:3001/api/trips', data: [] };
  }

  componentDidMount(){
    // const xhr = new XMLHttpRequest();
    // xhr.open('GET', this.state.url);
    // xhr.addEventListener('load', () => {
    //   if (xhr.status === 200){
    //     const apiData = JSON.parse(xhr.response);
    //     this.setState({ data: apiData });
    //     console.log(apiData);
    //   }
    // });
    // xhr.send();
  }

  render(){
    return (
      <h1>My Trips</h1>
    );
  }
}

export default Home;
