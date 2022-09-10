import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { getFromLocalStorage } from 'utils/LocalStorage'

const initialState = getFromLocalStorage<CurrencyProps>('currency', {
	label: 'USD',
	symbol: '$',
})

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		changeCurrency(state, { payload }: PayloadAction<CurrencyProps>) {
			state.label = payload.label
			state.symbol = payload.symbol
		},
	},
})

export const { changeCurrency } = currencySlice.actions
export default currencySlice.reducer
