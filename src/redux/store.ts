import { configureStore } from '@reduxjs/toolkit'
import cartModalReducer from './features/cartModalSlice'
import currencyModalReducer from './features/currencyModalSlice'
import currencyReducer from './features/currencySlice'

export const store = configureStore({
	reducer: {
		currency: currencyReducer,
		cartModal: cartModalReducer,
		currencyModal: currencyModalReducer,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
