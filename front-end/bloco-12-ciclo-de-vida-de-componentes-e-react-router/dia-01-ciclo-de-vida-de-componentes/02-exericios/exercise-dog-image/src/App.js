import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.fetchDogApi = this.fetchDogApi.bind(this);

    this.state = {
      data: "",
    };
  }

  async fetchDogApi() {
    const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
    const requestObj = await requestReturn.json();

    this.setState({
      data: requestObj
    });
  }

  componentDidMount() {
    this.fetchDogApi();
  }

  // Guarde a url da última imagem gerada no localStorage após cada atualização.
  componentDidUpdate() {
    // console.log(this.state.data.message)
    localStorage.setItem("dogMess", this.state.data.message);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.data.message.includes("terrier")) {
      return false;
    }
    return true;
  }

  render() {
    return(
      <div>
        { 
          this.state.data === ""
          ? <p>Loading...</p> 
          : <div>
              <img src={this.state.data.message} alt="Doguinho"/>
              <button onClick={this.fetchDogApi}>Outro Doguinho</button>
            </div> }
      </div>
    )
  }; 
}

export default App;


// import React from "react";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: ""
//     };
//     this.fetchDog = this.fetchDog.bind(this);
//   }

//   componentDidMount() {
//     this.fetchDog();
//   }

//   shouldComponentUpdate(nextProps, nextState) {
//     if (nextState.data.message.includes("terrier")) {
//       return false;
//     }
//     return true;
//   }

//   componentDidUpdate() {
//     localStorage.setItem("dogURL", this.state.data.message);
//     const dogBreed = this.state.data.message.split("/")[4];
//     alert(dogBreed);
//   }

//   fetchDog() {
//     fetch("https://dog.ceo/api/breeds/image/random")
//       .then(res => res.json())
//       .then(result => this.setState({ data: result }));
//   }

//   render() {
//     if (this.state.data === "") return "loading...";
//     return (
//       <div>
//         <p>Doguinhos</p>
//         <button onClick={this.fetchDog}>Novo doguinho!</button>
//         <div>
//           <img src={this.state.data.message} alt="Random dog" />
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
