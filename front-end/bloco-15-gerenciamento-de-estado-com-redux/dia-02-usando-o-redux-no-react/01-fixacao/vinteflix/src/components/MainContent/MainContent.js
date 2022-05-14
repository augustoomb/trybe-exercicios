import React from 'react';
import './MainContent.css';
import { connect } from 'react-redux'; // importei

class MainContent extends React.Component {
  render() {
    const { selectedMovie } = this.props;

    return (
      <div className="MainContent">
        <h2>{ selectedMovie.title }</h2>
        <p>Tribo: { selectedMovie.trybe }</p>
        <p>Day{ selectedMovie.day }</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedMovie: state.selectedMovie,
})

export default connect( mapStateToProps )( MainContent );