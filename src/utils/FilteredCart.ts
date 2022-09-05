import { ReturnCartObjectProps } from './CartObject'

interface FilteredCartProps {
	products: ReturnCartObjectProps[]
}

export function filteredCart({ products }: FilteredCartProps) {
	console.log(products)
}
