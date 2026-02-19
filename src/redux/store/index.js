// in questo file principale creeremo lo Store di Redux
import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../reducers'

const store = configureStore({
  reducer: mainReducer, // senza indicare il reducer, uno Store Redux non ha senso
})

export default store
// ora questo store lo posso iniettare nei miei componenti React
