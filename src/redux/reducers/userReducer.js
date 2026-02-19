import { ADD_TO_CART, REMOVE_FROM_CART, SET_USERNAME } from '../actions'

// il reducer è un componente fondamentale della logica di Redux
// è un "robottino" che, dato lo stato corrente dell'applicativo e l'ultima azione appena
// "dispatchata", sarà in grado di costruire il NUOVO stato dell'applicativo

// un reducer è una FUNZIONE PURA ("pure function"):
// - dato lo stesso input, restituirà sempre lo stesso output
// - non muta mai i proprio parametri
// - non effettua mai "side-effects" (es. chiamate API)

// una ACTION è un oggetto JS con almeno una proprietà di nome "type" (può anche avere un "payload")
// serve a DESCRIVERE la modifica che si vuole apportare nello stato

// la "prima biglia" solitamente la si assegna manualmente (come nel caso dello stato di un component)
const initialState = {
  // solitamente lo stato di un Redux Store è sempre organizzato in "slices"
  // per questo motivo lo si divide in sotto-oggetti
  name: '', // vuol dire valore "falsy"
}

const userReducer = (currentState = initialState, action) => {
  // è sulla base dell'action.type che il reducer sceglie COME costruire il nuovo stato
  switch (action.type) {
    // ora che dispatcho una action "ADD_TO_CART", se voglio che produca un risultato devo
    // istruire il reducer a gestirla!

    case SET_USERNAME:
      return {
        ...currentState,
        name: action.payload,
      }

    default:
      // se entro nel caso "default" vuol dire che non so come comportarmi
      // quindi, per non fare danni, ritorno lo stato attuale come l'ho trovato!
      return currentState
  }
}

export default userReducer
