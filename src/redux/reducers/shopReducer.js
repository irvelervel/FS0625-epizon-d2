// dentro questo reducer vorrei inizializzare una porzione dello Store dedicata al salvataggio
// dei libri disponibili nello shop; questi libri provengono da una chiamata API, che al momento
// viene effettuata nel componente BookStore e salvata localmente al suo interno.

import { GET_BOOKS, GET_BOOKS_ERROR } from '../actions'

const initialState = {
  available: [],
  error: false,
}

const shopReducer = (currentState = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...currentState,
        available: action.payload, // array di 6 libri
      }

    case GET_BOOKS_ERROR:
      return {
        ...currentState,
        error: true,
      }

    default:
      return currentState
  }
}

export default shopReducer
