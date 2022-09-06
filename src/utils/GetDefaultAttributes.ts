import { ReturnCartObjectProps } from './CartObject'
import { getFromLocalStorage } from './LocalStorage'

export function getDefaultAttributes(id: string) {
	const cartProducts: ReturnCartObjectProps[] = getFromLocalStorage('cart')
	const product = cartProducts?.find(({ product }) => product.shortId === id)
	return product?.defaultProps || []
}
