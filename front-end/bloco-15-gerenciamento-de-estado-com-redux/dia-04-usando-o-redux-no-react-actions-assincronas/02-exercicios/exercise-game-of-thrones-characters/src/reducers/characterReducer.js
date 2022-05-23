import { GET_CHARACTER, GET_CHARACTER_SUCCESS, GET_CHARACTER_ERROR } from '../actions'

const initialState = {
  loading: false
}

export default (state = initialState, { type, character, error }) => {
  switch (type) {

    case GET_CHARACTER:
      return { ...state, loading: true }

    case GET_CHARACTER_ERROR:
      console.log(error);
      return { ...state, loading: false, error, character: null }

    case GET_CHARACTER_SUCCESS:
      return { ...state, loading: false, character, error: null }

    default:
      return state
  }
}
