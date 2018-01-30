import React, { Component } from 'react';

class PartyMember extends Component {
  render(){
    const member = this.props.member;
    const lead = member.lead ? "Yes" : "";
    const paid = member.paid ? "Yes" : "No";
    return(
      <tr>
        <td>{lead}</td>
        <td>{member.firstName} {member.secondName}</td>
        <td>{member.sport}</td>
        <td>{paid}</td>
      </tr>
    );
  }
}

export default PartyMember;
