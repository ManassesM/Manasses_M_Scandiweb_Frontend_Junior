import gql from 'graphql-tag'
import { CurrencyProps } from './GET_CURRENCIES'

export type ProductAttributesTypes = 'text' | 'swatch'

export interface ItemProps {
	id: string
	value: string
	displayValue: string
}

export interface AttributeProps {
	id: string
	type: ProductAttributesTypes
	name: string
	items: ItemProps[]
}

export interface ProductQueryProps {
	id: string
	name: string
	brand: string
	gallery: string[]
	inStock: boolean
	prices: {
		currency: CurrencyProps
		amount: number
	}[]
	description: string
	attributes: AttributeProps[]
}

export interface QRProduct {
	product: ProductQueryProps
}

export const GET_PRODUCT_BY_ID = gql`
	query Product($id: String!) {
		product(id: $id) {
			id
			name
			brand
			description
			gallery
			inStock
			prices {
				currency {
					label
					symbol
				}
				amount
			}
			attributes {
				id
				type
				name
				items {
					id
					value
					displayValue
				}
			}
		}
	}
`
