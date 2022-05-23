import charAPI from '../services/charAPI'

export const GET_CHARACTER = 'GET_CHARACTER'
export const GET_CHARACTER_SUCCESS = 'GET_CHARACTER_SUCCESS'
export const GET_CHARACTER_ERROR = 'GET_CHARACTER_ERROR'

const loading = () => ({ type: GET_CHARACTER })
const error = (error) => ({ type: GET_CHARACTER_ERROR, error })
const getCharacter = (character) => ({ type: GET_CHARACTER_SUCCESS, character })

export const fetchCharacter = (name) => {
  return async (dispatch) => {
    dispatch(loading())
    try {
      const response = await charAPI(name)
      const character = response[0]
      if (!character) {
        throw new Error();
      }
      dispatch(getCharacter(character))
    } catch (e) {
      dispatch(error('Não foi encontrado'))
    }
  }
}