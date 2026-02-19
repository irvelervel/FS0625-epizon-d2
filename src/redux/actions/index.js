// la prima miglioria di oggi sarà creare delle COSTANTI per indicare gli action types
// in questo modo rendiamo IMPOSSIBILE la confusione tra gli action types quando
// a) dispatcheremo le azioni
// b) creeremo i casi nel reducer

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

// ACTION CREATORS
// Gli action creators diventano utili nelle situazioni in cui volete "centralizzare" porzioni di logica
// legate al dispatch delle actions. Al momento quando si "dispatcha" una action si è costretti a
// prendere una decisione: inserisco la logica nel componente e nella fase di dispatch oppure all'interno
// del reducer? Di solito l'approccio di Stefano consiglia di lavorare all'interno dei reducers il meno
// possibile, quindi bisognerebbe lavorare "a monte", prima di attivare il reducer.
// Invece che inserire l'intera logica nel componente potete pensare di delegarla ad una funzione speciale:
// un "action creator". Un action creator, nella sua forma più base, è una FUNZIONE che ritorna UN'AZIONE.

export const addToCartAction = function (bookSelected) {
  return {
    type: ADD_TO_CART, // un po' come le costanti in JS
    payload: bookSelected,
  }
}

// forma contratta con la funzione freccia, viene comunque ritornato l'oggetto anche senza il
// "return" esplicito
export const removeFromCartAction = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id, // fornisco al reducer anche l'id del libro, altrimenti
  // non saprebbe quale rimuovere!
})

// const sayHello = function () {
//   return 'CIAONE'
// }

// console.log(sayHello())
// sayHello().toLowerCase()

export const setUsernameAction = (formValue) => ({
  type: SET_USERNAME,
  payload: formValue,
})
