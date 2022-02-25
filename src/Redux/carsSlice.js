import { createSlice } from "@reduxjs/toolkit";
import { cars } from "../components/HomeComponents/data";
const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        allCars:cars,
        currentCar:{car:cars[0]}
    },
    reducers: {
      updateCarInfo :(state, action) => {
      },
      selectCurrentCar:(state,action)=>{
          state.currentCar = action.payload
      }
    },
  })
  
  export const { updateCarInfo,selectCurrentCar } = carsSlice.actions

  export default carsSlice.reducer