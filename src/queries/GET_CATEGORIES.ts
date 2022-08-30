import gql from 'graphql-tag'

export interface CategoryProps {
	name: string
}

export interface QRCategories {
	categories: CategoryProps[]
}

export const GET_CATEGORIES = gql`
	query Categories {
		categories {
			name
		}
	}
`
