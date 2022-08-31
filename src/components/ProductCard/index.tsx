import { ProductProps } from 'queries/GET_PRODUCTS_BY_CATEGORY'
import { Component } from 'react'
import { Link } from 'react-router-dom'

import * as S from './style'

export class ProductCard extends Component<ProductProps> {
	render() {
		console.log(this.props)
		return (
			<S.ProductCardContainer>
				<Link to={`/products/${this.props.id}`}>{this.props.id}</Link>
			</S.ProductCardContainer>
		)
	}
}

export default ProductCard
