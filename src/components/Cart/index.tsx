import { ProductQueryProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import ProductAmount from '../ProductAmount'
import MainInfo from './MainInfo'
import ProductImage from './ProductImage'

import * as S from './style'

interface CartProps extends ProductQueryProps {
  itemAmount?: number
}

export class Cart extends PureComponent<CartProps> {
	render() {
		return (
			<S.CartContainer>
				<S.MainInfoContainer>
					<MainInfo
						id={this.props.id}
						attributes={this.props.attributes}
						brand={this.props.brand}
						name={this.props.name}
						prices={this.props.prices}
					/>

					<ProductAmount itemAmount={this.props.itemAmount} />
				</S.MainInfoContainer>

				<ProductImage images={this.props.gallery} />
			</S.CartContainer>
		)
	}
}

export default Cart
