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
		},
		selectCurrentCar: (state, action) => {
			state.currentCar = action.payload;
		},
		initialCar: (state, action) => {
			state.currentCar = cars[0];
		}
	}
});

export const { updateCarInfo, selectCurrentCar, initialCar } = carsSlice.actions;

export default carsSlice.reducer;
