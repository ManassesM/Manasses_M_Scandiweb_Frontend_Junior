import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'

export interface CartObjectProps {
	product: QRProduct
	defaultProps?: DefaultPropsObject[]
}

export function cartObject({ product, defaultProps }: CartObjectProps) {
	const updatedObject = {
		product,
		defaultProps,
	} as CartObjectProps

	return updatedObject
}
