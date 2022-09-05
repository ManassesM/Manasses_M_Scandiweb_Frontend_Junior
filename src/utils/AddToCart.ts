import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { cartObject, CartObjectProps } from './CartObject'
import { getDefaultAttributes } from './GetDefaultAttributes'
import { getFromLocalStorage, setToLocalStorage } from './LocalStorage'

interface HandleAddToCartProps {
	product: QRProduct
	updateAmount: () => void
}

export function addToCart({ product, updateAmount }: HandleAddToCartProps) {
	const cart: CartObjectProps[] = getFromLocalStorage('cart')
	const defaultProps = getDefaultAttributes(product.product.id)

	const updatedData = cartObject({
		product,
		defaultProps,
	})
	setToLocalStorage('cart', [...(cart || []), updatedData])
	updateAmount()
}
