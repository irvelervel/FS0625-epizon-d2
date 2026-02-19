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
  cart: {
    // cart si definisce "slice", "fetta" del Redux Store
    content: [], // qui salveremo i libri da mettere nel carrello
  },
  user: {
    name: '', // vuol dire valore "falsy"
  },
}

const mainReducer = (currentState = initialState, action) => {
  // è sulla base dell'action.type che il reducer sceglie COME costruire il nuovo stato
  switch (action.type) {
    // ora che dispatcho una action "ADD_TO_CART", se voglio che produca un risultato devo
    // istruire il reducer a gestirla!
    case ADD_TO_CART:
      // qui ritorniamo il NUOVO stato dell'app quando intercetto una action di questo tipo
      return {
        // RICORDA! i metodi MUTATIVI degli array (push, pop, shift, unshift, splice etc.)
        // sono ILLEGALI in un reducer, perchè vanno a MODIFICARE IN-PLACE l'array di partenza
        // -> modifichiamo currentState -> modifichiamo i parametri della pure function -> ERRORE

        // l'oggetto che adesso ritorneremo dovrà avere tutti i valori dell'originale ma
        // allungare di 1 elemento l'array content
        ...currentState, // <- spread operator, crea una copia delle proprietà di currentState e le trapianta qua
        // questo spread operator sta "trascinando" nei nuovi stati anche le altre slices come "user"
        cart: {
          ...currentState.cart,
          // content: currentState.cart.content.concat(action.payload), // action.payload era bookSelected
          content: [...currentState.cart.content, action.payload],
        },
      }

    case REMOVE_FROM_CART:
      return {
        ...currentState,
        cart: {
          ...currentState.cart,
          // filter
          content: currentState.cart.content.filter((book) => {
            // versione lunga
            // if (book.id !== action.payload) {
            //   return true
            // } else {
            //   return false
            // }
            // versione pro
            return book.id !== action.payload
          }),
          // spread operator (NIGHTMARE VERSION)
          // [fetta fino all'elemento da rimuovere, fetta da elemento da rimuovere + 1]
          //   content: [
          //     ...currentState.cart.content.slice(
          //       0,
          //       currentState.cart.content.findIndex(
          //         (b) => b.id === action.payload,
          //       ),
          //     ),
          //     ...currentState.cart.content.slice(
          //       currentState.cart.content.findIndex(
          //         (b) => b.id === action.payload,
          //       ) + 1,
          //     ),
          //   ],
        },
      }

    case SET_USERNAME:
      return {
        ...currentState,
        user: {
          name: action.payload,
        },
      }

    default:
      // se entro nel caso "default" vuol dire che non so come comportarmi
      // quindi, per non fare danni, ritorno lo stato attuale come l'ho trovato!
      return currentState
  }
}

export default mainReducer
