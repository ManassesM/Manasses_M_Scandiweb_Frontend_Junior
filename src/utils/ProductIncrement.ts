import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { addToCart } from './AddToCart'
import { getDefaultAttributes } from './GetDefaultAttributes'

interface ProductIncrementProps {
	product: QRProduct
	shortId: string
}

export function productIncrement({ product, shortId }: ProductIncrementProps) {
	const defaultProps = getDefaultAttributes(shortId)
	addToCart({ product, defaultProps })
}
