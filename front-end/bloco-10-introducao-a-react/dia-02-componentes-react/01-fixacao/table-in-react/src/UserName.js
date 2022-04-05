import React from "react";
import './UserName.css'

class UserName extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <span className='name'>{ name }</span>
    );
  }
}

export default UserName;