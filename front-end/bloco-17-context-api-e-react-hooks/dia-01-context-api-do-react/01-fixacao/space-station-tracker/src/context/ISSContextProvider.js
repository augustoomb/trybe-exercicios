import React from 'react';
import ISSContext from './ISSContext';

class ISSContextProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: -22.76582271125457,
      longitude: -43.43816981560644,
      loading: false,
    };
    this.setLocation = this.setLocation.bind(this);
    this.fetchLocation = this.fetchLocation.bind(this);
  }

  setLocation({ latitude, longitude }) {
    console.log('dentro do setLocation');
    this.setState({
      latitude, longitude,
    });
  }

  async fetchLocation() {
    const apiData = await fetch('http://api.open-notify.org/iss-now.json');
    const { iss_position: issPosition } = await apiData.json();
    const data = {
      latitude: Number(issPosition.latitude),
      longitude: Number(issPosition.longitude),
    };
    // dispatch(fetchLocation(data));
    this.setLocation(data);
    // this.setState({
    //   latitude, longitude,
    // });
  }

  render() {
    const INITIAL_STATE = {
      ...this.state,
    };

    const { children } = this.props;
    return (
      <div className="ISSContextProvider">
        <ISSContext.Provider
          value={ {
            ...INITIAL_STATE,
            setLocation: this.setLocation,
            fetchLocation: this.fetchLocation,
          } }
        >
          {children}
        </ISSContext.Provider>
      </div>
    );
  }
}

export default ISSContextProvider;

// ACHO que usar o children significa que estou passando os dados para todos filhos de IISCONtext.Provider.
// já que lá no index, falei que ISSContextProvider é pai de todos, logo o provider vai para todos.
