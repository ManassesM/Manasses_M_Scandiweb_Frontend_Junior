import gql from 'graphql-tag'
import { CurrencyProps } from './GET_CURRENCIES'
import { AttributeProps } from './GET_PRODUCT_BY_ID'

export interface ProductProps {
	id: string
	name: string
	brand: string
	category: string
	gallery: string[]
	inStock: boolean
	prices: {
		amount: number
		currency: CurrencyProps
	}[]
	description: string
	attributes: AttributeProps[]
}

export interface ProductsQueryProps {
	name: string
	products: ProductProps[]
}

export interface QRProductsByCategory {
	category: ProductsQueryProps
}

export const GET_PRODUCTS_BY_CATEGORY = gql`
	query Products($category: String!) {
		category(input: { title: $category }) {
			name
			products {
				id
				name
				brand
				category
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
	}
`
