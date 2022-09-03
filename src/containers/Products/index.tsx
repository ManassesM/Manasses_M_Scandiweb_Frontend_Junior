import { LoadingSpinner } from 'components/LoadingSpinner'
import ProductCard from 'components/ProductCard'

import { CategoryProps } from 'queries/GET_CATEGORIES'
import {
	GET_PRODUCTS_BY_CATEGORY,
	QRProductsByCategory,
} from 'queries/GET_PRODUCTS_BY_CATEGORY'
import { PureComponent } from 'react'
import { Query, QueryResult } from 'react-apollo'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'

import * as S from './style'

interface ProductsContainerProps {
	category: CategoryProps
}

export class ProductsContainer extends PureComponent<ProductsContainerProps> {
	render() {
		const category = this.props.category?.name || 'all'

		return (
			<Query query={GET_PRODUCTS_BY_CATEGORY} variables={{ category }}>
				{({ data, loading }: QueryResult<QRProductsByCategory>) => {
					if (loading) return <LoadingSpinner />

					return (
						<S.ProductsGrid>
							{data?.category.products?.map((product) => (
								<ProductCard {...product} key={product.id} />
							))}
						</S.ProductsGrid>
					)
				}}
			</Query>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	category: state.category,
})

export default connect(mapStateToProps)(ProductsContainer)
