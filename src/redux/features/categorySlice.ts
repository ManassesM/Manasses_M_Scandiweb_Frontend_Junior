import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CategoryProps } from 'queries/GET_CATEGORIES'

const initialState: CategoryProps = {
	name: 'all',
}

const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {
		changeCategory: (state, { payload }: PayloadAction<CategoryProps>) => {
			state.name = payload.name
		},
	},
})

export const { changeCategory } = categorySlice.actions
export default categorySlice.reducer
