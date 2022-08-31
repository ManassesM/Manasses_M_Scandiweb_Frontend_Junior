import { createSlice } from '@reduxjs/toolkit'

export interface CartModalProps {
	open: boolean
}

const initialState: CartModalProps = {
	open: false,
}

const cartModalSlice = createSlice({
	name: 'cartModal',
	initialState,
	reducers: {
		toggleCartModal: (state) => {
			state.open = !state.open
		},
	},
})

export const { toggleCartModal } = cartModalSlice.actions
export default cartModalSlice.reducer
