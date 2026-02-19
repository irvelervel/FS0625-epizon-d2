// in questo file principale creeremo lo Store di Redux
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'

// per "ricompattare" i vari mini-reducers che abbiamo creato, utilizziamo la funzione "combineReducers()"
// questa funzione va invocata con un oggetto: dentro questo oggetto, ricreerete le singole "fette" dello store
const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  // cart e user sono le "slices" che voglio ricreare
})

const store = configureStore({
  reducer: bigReducer, // senza indicare il reducer, uno Store Redux non ha senso
})

export default store
// ora questo store lo posso iniettare nei miei componenti React

// questo era lo stato di Redux quando avevamo un SINGOLO mainReducer: vogliamo preservarne la struttura,
// anche adesso che avremo dei mini-reducers più piccoli!

// const initialState = {
//   cart: {
//     content: []
//   },
//   user: {
//     name: ''
//   }
// }

// per farlo, ho "spezzato" il mainReducer in due mini-reducers più piccoli: cartReducer e userReducer.
// ora ciascuno dei due si occupa di mantenere solo una "slice" (fetta) dello store, per es. a
// cartReducer arriva solo il contenuto della proprietà "cart" e deve restituire allo Store (da ogni
// case) solamente un oggetto con la forma di quella proprietà.
