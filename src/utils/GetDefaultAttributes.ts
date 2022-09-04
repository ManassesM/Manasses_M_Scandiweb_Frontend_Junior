import { CartObjectProps } from './CartObject'
import { getFromLocalStorage } from './LocalStorage'

export function getDefaultAttributes(id: string) {
	const cart: CartObjectProps[] = getFromLocalStorage('cart')
	const product = cart?.find(({ product }) => product.product.id === id)
	return product?.defaultProps || []
}
