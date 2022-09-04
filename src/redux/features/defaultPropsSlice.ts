import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemProps } from 'queries/GET_PRODUCT_BY_ID'

export interface DefaultPropsObject {
	id: string
	data: ItemProps
}

export interface DefaultProps {
	data?: DefaultPropsObject[]
}

const initialState: DefaultProps = {}

const defaultPropsSlice = createSlice({
	name: 'defaultProps',
	initialState,
	reducers: {
		updateDefaultProps: (state, { payload }: PayloadAction<DefaultProps>) => {
			state.data = payload.data
		},
	},
})

export const { updateDefaultProps } = defaultPropsSlice.actions
export default defaultPropsSlice.reducer
