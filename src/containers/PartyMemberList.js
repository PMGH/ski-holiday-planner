import React, { Component } from 'react';
import PartyMember from '../components/PartyMember';

class PartyMemberList extends Component {
  render(){
    return (
      <section>
        <h1>Party Member List</h1>
        <PartyMember />
      </section>
    );
  }
}

export default PartyMemberList;
