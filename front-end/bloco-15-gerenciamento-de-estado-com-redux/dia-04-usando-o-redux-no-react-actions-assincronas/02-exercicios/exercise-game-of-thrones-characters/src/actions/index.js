
export function fetchAPI() {
  // Desenvolva aqui o código da action assíncrona
  return(dispatch) => {
    dispatch(requestAPI());
    return fetch('https://aws.random.cat/meow')
      .then(response => response.json())
      .then(json => dispatch(getPicture(json)))
  }
}