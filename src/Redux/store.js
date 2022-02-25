import { configureStore } from '@reduxjs/toolkit'
import carsSlice, {updateCarInfo,getCars} from './carsSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({cars:carsSlice})

const store = configureStore({
    reducer: rootReducer
  })
  
  export default store