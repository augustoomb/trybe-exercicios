/* eslint-disable react/state-in-constructor */
import React from 'react';
// import { connect } from 'react-redux';
import latitudeImg from '../assets/latitude.svg';
import longitudeImg from '../assets/longitude.svg';
import ISSContext from '../context/ISSContext';
// import { fetchLocationThunk } from '../redux/actions';

class Coordinates extends React.Component {
  async componentDidMount() {
    const { setLocation, fetchLocation } = this.context;
    const ONE_SECOND = 1000;
    // Component
    // setInterval(async () => {
    //   const apiData = await fetch('http://api.open-notify.org/iss-now.json');
    //   const { iss_position: issPosition } = await apiData.json();
    //   const data = {
    //     latitude: Number(issPosition.latitude),
    //     longitude: Number(issPosition.longitude),
    //   };
    //   // dispatch(fetchLocation(data));
    //   setLocation(data);
    // }, ONE_SECOND);

    // thunk
    // setInterval(() => {
    //   // dispatch(fetchLocationThunk());
    // }, ONE_SECOND);

    setInterval(async () => {
      await fetchLocation();
    }, ONE_SECOND);
  }

  render() {
    const { latitude, longitude } = this.context;
    return (
      <div className="lat-long-section-wrapper">
        <section className="lat-long-section">
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ latitudeImg }
              width={ 24 }
              height={ 24 }
              alt="latitude"
            />
            <span>
              Latitude:
              {' '}
              {latitude}
            </span>
          </div>
          <div className="lat-long">
            <img
              className="lat-long-img"
              src={ longitudeImg }
              width={ 24 }
              height={ 24 }
              alt="longitude"
            />
            <span>
              Longitude:
              {' '}
              {longitude}
            </span>
          </div>
        </section>
        {/* <hr />
        <h1>AQUI</h1>
        <ISSContext.Consumer>
          {(contextState) => {return (<p>{JSON.stringify(contextState)}</p>) }}
        </ISSContext.Consumer> */}
      </div>
    );
  }
}

// limitado a 1 context
Coordinates.contextType = ISSContext;
export default Coordinates;

// 1 forma de ler os dados do context é pegar do context (linh 80) e depois chamar (linha 36)

// ou fazer como na linha 71;
