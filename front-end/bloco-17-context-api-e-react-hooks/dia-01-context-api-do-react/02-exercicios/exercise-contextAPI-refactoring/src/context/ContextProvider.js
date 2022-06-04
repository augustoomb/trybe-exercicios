import React from "react";
import MyContext from './MyContext';

class ContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cars: {
        red: false,
        blue: false,
        yellow: false,
      },
    }

    this.moveCar = this.moveCar.bind(this);
  }

  moveCar(movedCar) {
    this.setState((prevState) => ({
      cars: {
        [movedCar]: !prevState.cars[movedCar]
      }
    }))
  }

  render() {
    const INITIAL_STATE = {
      ...this.state,
    };

    const { children } = this.props;

    return (
      <div>
        <MyContext.Provider
          value={ {
            ...INITIAL_STATE,
            moveCar: this.moveCar,
          }}
        >
          { children }
        </MyContext.Provider>
      </div>
    )
  }
}

export default ContextProvider;
