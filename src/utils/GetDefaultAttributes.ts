import { ReturnCartObjectProps } from './CartObject'
import { getFromLocalStorage } from './LocalStorage'

export function getDefaultAttributes(id: string) {
	const cart: ReturnCartObjectProps[] = getFromLocalStorage('cart')
	const product = cart?.find(({ product }) => product.shortId === id)
	return product?.defaultProps || []
}
