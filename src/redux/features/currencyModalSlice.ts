import { createSlice } from '@reduxjs/toolkit'

export interface CurrencyModalProps {
	open: boolean
}

const initialState: CurrencyModalProps = {
	open: false,
}

const currencyModalSlice = createSlice({
	name: 'currencyModal',
	initialState,
	reducers: {
		toggleCurrencyModal: (state) => {
			state.open = !state.open
		},
	},
})

export const { toggleCurrencyModal } = currencyModalSlice.actions
export default currencyModalSlice.reducer
