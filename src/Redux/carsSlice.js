import { createSlice } from '@reduxjs/toolkit';
import { cars } from '../components/HomeComponents/data';
const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		allCars: cars,
		currentCar: {}
	},
	reducers: {
		updateCarInfo: (state, action) => {
			action.payload.newDataOfCar.engine
				? (state.currentCar.engine = action.payload.newDataOfCar.engine)
				: (state.currentCar.engine = state.currentCar.engine);
			action.payload.newDataOfCar.transmission
				? (state.currentCar.transmission = action.payload.newDataOfCar.transmission)
				: (state.currentCar.transmission = state.currentCar.transmission);
			action.payload.newDataOfCar.fuelType
				? (state.currentCar.fuel_type = action.payload.newDataOfCar.fuelType)
				: (state.currentCar.fuel_type = state.currentCar.fuel_type);
		},deleteCar: (state, action) => {
        let filteredCars = state.allCars.filter((car)=>{
          return car.id!==action.payload
        })
        state.allCars = filteredCars
        state.currentCar=filteredCars[0]
      },
		selectCurrentCar: (state, action) => {
			state.currentCar = action.payload;
		},
		initialCar: (state, action) => {
			state.currentCar = action.payload;
		}
	}
});

export const { updateCarInfo, selectCurrentCar, initialCar,deleteCar } = carsSlice.actions;

export default carsSlice.reducer;
