import { ItemProps } from 'queries/GET_PRODUCT_BY_ID'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'

interface ActivePropProps {
	item: ItemProps
	props: DefaultPropsObject[]
	section: string
}

export function activeProp({ item, props, section }: ActivePropProps) {
	const currentObject = props.find(({ id }) => id === section)
	const isActive = currentObject?.data.id === item.id
	return isActive as boolean
}
