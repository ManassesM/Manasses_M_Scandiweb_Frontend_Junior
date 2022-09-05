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
		updateAmount(state) {
			state.amount = state.amount + 1
		},
	},
})

export const { updateAmount } = cartAmountSlice.actions
export default cartAmountSlice.reducer
