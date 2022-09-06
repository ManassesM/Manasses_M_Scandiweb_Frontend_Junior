import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import { cartObject } from './CartObject'
import { getFromLocalStorage, setToLocalStorage } from './LocalStorage'

interface HandleAddToCartProps {
	product: QRProduct
	defaultProps: DefaultPropsObject[]
}

export function addToCart({ product, defaultProps }: HandleAddToCartProps) {
	const cartProducts = getFromLocalStorage('cart')

	const updatedData = cartObject({
		product,
		defaultProps,
	})

	setToLocalStorage('cart', [...(cartProducts || []), updatedData])
}
