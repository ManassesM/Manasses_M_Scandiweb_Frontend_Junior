import { createSlice } from '@reduxjs/toolkit'

export interface CartAmountProps {
	amount: number
}

const initialState: CartAmountProps = {
	amount: 0,
}

const cartAmountSlice = createSlice({
	name: 'cartAmount',
	initialState,
	reducers: {
		incrementAmount(state) {
			state.amount = state.amount + 1
		},
		decrementAmount(state) {
			state.amount = state.amount - 1
		},
	},
})

export const { incrementAmount, decrementAmount } = cartAmountSlice.actions
export default cartAmountSlice.reducer
