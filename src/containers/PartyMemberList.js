import React, { Component } from 'react';
import PartyMember from '../components/PartyMember';

class PartyMemberList extends Component {
  render(){
    const members = this.props.data.map((member, index) => {
      return <PartyMember member={member} key={index} />
    });
    return (
      <section>
        <h1>Party Member List</h1>
        <table id="product-list-products">
          <thead>
            <tr>
              <th>Lead</th>
              <th>Name</th>
              <th>Sport</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            {members}
          </tbody>
        </table>
      </section>
    );
  }
}

export default PartyMemberList;
