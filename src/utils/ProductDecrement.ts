import { ReturnCartObjectProps } from './CartObject'
import { getFromLocalStorage, setToLocalStorage } from './LocalStorage'

export function productDecrement(shortId: string) {
	const cartProducts = getFromLocalStorage<ReturnCartObjectProps[]>('cart')
	const filteredProducts = cartProducts.filter(
		({ product }) => product.shortId !== shortId
	)

	setToLocalStorage('cart', filteredProducts)
}
