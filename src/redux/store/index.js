// in questo file principale creeremo lo Store di Redux
import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../reducers/cartReducer'
import userReducer from '../reducers/userReducer'
import shopReducer from '../reducers/shopReducer'

// per "ricompattare" i vari mini-reducers che abbiamo creato, invece che assegnare un singolo reducer
// come valore assegniamo un oggetto: dentro questo oggetto, ricreerete le singole "fette" dello store

const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    // cart e user sono le "slices" che voglio ricreare
    // creo anche una fetta "shop", per salvare i libri disponibili
    shop: shopReducer,
  }, // senza indicare il reducer, uno Store Redux non ha senso
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
