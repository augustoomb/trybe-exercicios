import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{ headline }</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defaultProps = {
  headline: '',
};

export default Title;
