import { createSlice } from "@reduxjs/toolkit";
import { cars } from "../components/HomeComponents/data";

const carsSlice = createSlice({
    name: 'cars',
    initialState: cars,
    reducers: {
      updateCarInfo :(state, action) => {
        console.log(action.payload);
      },
      getCars:(state,action)=>{

      }
    },
  })
  
  const { updateCarInfo,getCars } = carsSlice.actions

  export default carsSlice.reducer