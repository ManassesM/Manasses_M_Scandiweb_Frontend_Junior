import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import shortid from 'shortid'

export interface ProductProps extends QRProduct {
	shortId: string
}

export interface ReturnCartObjectProps {
	product: ProductProps
	defaultProps?: DefaultPropsObject[]
}

export interface CartObjectProps {
	product: QRProduct
	defaultProps?: DefaultPropsObject[]
}

export function cartObject({ product, defaultProps }: CartObjectProps) {
	const updatedObject = {
		product: {
			...product,
			shortId: shortid.generate(),
		},
		defaultProps,
	} as ReturnCartObjectProps

	return updatedObject
}
