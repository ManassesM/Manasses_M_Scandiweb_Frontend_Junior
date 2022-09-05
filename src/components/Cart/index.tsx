import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { incrementAmount } from 'redux/features/cartAmountSlice'
import { AppDispatch } from 'redux/store'
import { addToCart } from 'utils/AddToCart'
import { ProductProps } from 'utils/CartObject'
import { getDefaultAttributes } from 'utils/GetDefaultAttributes'

import ProductAmount from '../ProductAmount'
import MainInfo from './MainInfo'
import ProductImage from './ProductImage'

import * as S from './style'

interface CartProps {
	itemAmount?: number
	product: ProductProps
	incrementAmount: () => void
}

export class Cart extends PureComponent<CartProps> {
	render() {
		const { attributes, brand, name, prices, gallery } =
			this.props.product.product

		const handleClick = (type: 'increment' | 'decrement') => {
			if (type === 'increment') {
				const product: QRProduct = { product: this.props.product.product }
				const defaultProps = getDefaultAttributes(this.props.product.shortId)

				this.props.incrementAmount()
				return addToCart({ product, defaultProps })
			}
		}

		return (
			<S.CartContainer>
				<S.MainInfoContainer>
					<MainInfo
						attributes={attributes}
						brand={brand}
						name={name}
						prices={prices}
						shortId={this.props.product.shortId}
					/>

					<ProductAmount
						itemAmount={this.props.itemAmount || 0}
						onClickDecrement={() => console.log('Decrement')}
						onClickIncrement={() => handleClick('increment')}
					/>
				</S.MainInfoContainer>

				<ProductImage images={gallery} />
			</S.CartContainer>
		)
	}
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		incrementAmount: () => {
			dispatch(incrementAmount())
		},
	}
}

export default connect(null, mapDispatchToProps)(Cart)
