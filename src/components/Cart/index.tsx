import { ProductQueryProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import MainInfo from './MainInfo'
import ProductAmount from '../ProductAmount'
import ProductImage from './ProductImage'
import * as S from './style'

export class Cart extends PureComponent<ProductQueryProps> {
	render() {
		return (
			<S.CartContainer>
				<S.MainInfoContainer>
					<MainInfo
						attributes={this.props.attributes}
						brand={this.props.brand}
						name={this.props.name}
						prices={this.props.prices}
					/>

					<ProductAmount />
				</S.MainInfoContainer>

				<ProductImage images={this.props.gallery} />
			</S.CartContainer>
		)
	}
}

export default Cart
