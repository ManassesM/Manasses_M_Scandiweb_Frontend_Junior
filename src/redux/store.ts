import { configureStore } from '@reduxjs/toolkit'
import { currencyMiddleware } from './currencyMiddleware'
import cartAmountReducer from './features/cartAmountSlice'
import cartModalReducer from './features/cartModalSlice'
import categoryReducer from './features/categorySlice'
import currencyModalReducer from './features/currencyModalSlice'
import currencyReducer from './features/currencySlice'
import defaultPropsReducer from './features/defaultPropsSlice'

export const store = configureStore({
	reducer: {
		currency: currencyReducer,
		cartModal: cartModalReducer,
		currencyModal: currencyModalReducer,
		category: categoryReducer,
		defaultProps: defaultPropsReducer,
		cartAmount: cartAmountReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(currencyMiddleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
