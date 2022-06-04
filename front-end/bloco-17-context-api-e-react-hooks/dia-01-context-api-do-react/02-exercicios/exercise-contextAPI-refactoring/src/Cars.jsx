// import PropTypes from 'prop-types';
import React from 'react';
// import { connect } from 'react-redux';
import MyContext from './context/MyContext';
import carBlue from './images/carBlue.jpeg';
import carRed from './images/carRed.jpeg';
import carYellow from './images/carYellow.jpeg';
// import { moveCar } from './redux/actionCreators';

class Cars extends React.Component{
  render() {
    const { cars, moveCar } = this.context;
    const { red } = cars;
    const { blue } = cars;
    const { yellow } = cars;
    return (
      <div>
        <div>
          <img
            className={red ? 'car-right' : 'car-left'}
            src={carRed}
            alt="red car"
          />
          <button
            onClick={() => moveCar('red')}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={blue ? 'car-right' : 'car-left'}
            src={carBlue}
            alt="blue car"
          />
          <button
            onClick={() => moveCar('blue')}
            type="button"
          >
            Move
          </button>
        </div>
        <div>
          <img
            className={yellow ? 'car-right' : 'car-left'}
            src={carYellow}
            alt="yellow car"
          />
          <button
            onClick={() => moveCar('yellow')}
            type="button"
          >
            Move
          </button>
        </div>
      </div>
    );
  }  
}

Cars.contextType = MyContext;

export default Cars;
