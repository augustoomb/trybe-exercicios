import React from "react";

class UserOtherInfo extends React.Component {
  render() {
    const { email, id } = this.props;
    return (
      <div>
        <span>{ email }</span><br />
        <span>{ id }</span>
      </div>
    );
  }
}

export default UserOtherInfo;