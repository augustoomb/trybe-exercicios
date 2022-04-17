// import React from 'react';

// class Dog extends React.Component {
//   constructor() {
//     super();

//     this.fetchDogApi = this.fetchDogApi.bind(this);
//     this.clickButton = this.clickButton.bind(this);

//     this.state = {
//       dogImg: undefined,
//       loading: true,
//     };
//   }

//   async fetchDogApi() {
//     this.setState(
//       {loading: true},
//       async () => {
//         const requestReturn = await fetch('https://dog.ceo/api/breeds/image/random');
//         const requestObj = await requestReturn.json();

//         this.setState({
//           dogImg: requestObj.message,
//           loading: false,
//         });
//       }
//     );
//   }

//   shouldComponentUpdate(_nexProps, nextState) {
//     const text = nextState.dogImg;
//     console.log(text)
//     return true;
//     // if (nextState.dogImg.includes("terrier")) {
//     //   return true;
//     // }
//     // return false;
//   }

//   clickButton() {
//     this.fetchDogApi();
//   }
  
//   componentDidMount() {
//     this.fetchDogApi();
//   }

//   render() {
//     const loading = <span>Loading...</span>;

//     return(
//       <div>
//         { 
//           this.state.loading 
//           ? loading 
//           : <div>
//               <img src={this.state.dogImg} />
//               <button onClick={this.clickButton}>Outro Doguinho</button>
//             </div> }
//       </div>
//     )
//   }
// }

// export default Dog;