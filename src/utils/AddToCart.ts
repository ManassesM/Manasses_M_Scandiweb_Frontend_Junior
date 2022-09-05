import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import { cartObject, CartObjectProps } from './CartObject'
import { getFromLocalStorage, setToLocalStorage } from './LocalStorage'

interface HandleAddToCartProps {
	product: QRProduct
	defaultProps: DefaultPropsObject[]
}

export function addToCart({ product, defaultProps }: HandleAddToCartProps) {
	const cart: CartObjectProps[] = getFromLocalStorage('cart')

	const updatedData = cartObject({
		product,
		defaultProps,
	})

	setToLocalStorage('cart', [...(cart || []), updatedData])
}
