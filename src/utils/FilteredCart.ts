import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import { ProductProps, ReturnCartObjectProps } from './CartObject'

interface FilteredCartProps {
	products: ReturnCartObjectProps[]
}

interface ReturnFilteredCartProps {
	product: ProductProps
	defaultProps?: DefaultPropsObject[]
	counting: number
}

export function filteredCart({ products }: FilteredCartProps) {
	let ids = [] as string[]
	let finalObj = [] as ReturnFilteredCartProps[]

	products.reduce<ReturnFilteredCartProps[]>(
		(acc, { product, defaultProps }) => {
			if (!ids.includes(JSON.stringify(defaultProps))) {
				finalObj = [
					...finalObj,
					{
						product,
						defaultProps,
						counting: 1,
					},
				] as ReturnFilteredCartProps[]

				ids.push(JSON.stringify(defaultProps))
				return finalObj
			}

			const idx = ids.findIndex((id) => id === JSON.stringify(defaultProps))
			finalObj[idx].counting++

			return acc
		},
		[]
	)

	return finalObj
}
