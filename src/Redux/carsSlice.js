import { createSlice } from '@reduxjs/toolkit';
import { cars } from '../components/HomeComponents/data';
const carsSlice = createSlice({
	name: 'cars',
	initialState: {
		allCars: cars,
		filteredCarsCatagory:[],
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
		},
		filterCarCat:(state,action)=>{
			let filterCarCategory = state.allCars.filter((car)=>{
				return car.cat===action.payload
			})
			state.filteredCarsCatagory = filterCarCategory
		}
		
	}
});

export const { updateCarInfo, selectCurrentCar, initialCar,deleteCar,retrieveAllCars,filterCarCat } = carsSlice.actions;

export default carsSlice.reducer;
