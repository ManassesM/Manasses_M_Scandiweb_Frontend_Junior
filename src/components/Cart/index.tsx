import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
	decrementAmount,
	incrementAmount,
} from 'redux/features/cartAmountSlice'
import { AppDispatch } from 'redux/store'
import { ProductProps } from 'utils/CartObject'
import { productDecrement } from 'utils/ProductDecrement'
import { productIncrement } from 'utils/ProductIncrement'

import ProductAmount from '../ProductAmount'
import MainInfo from './MainInfo'
import ProductImage from './ProductImage'

import * as S from './style'

interface CartProps {
	itemAmount?: number
	product: ProductProps
	incrementAmount: () => void
	decrementAmount: () => void
	shortId: string
}

export class Cart extends PureComponent<CartProps> {
	render() {
		const itemAmount = this.props.itemAmount || 0

		const { attributes, brand, name, prices, gallery } =
			this.props.product.product

		const handleClickIncrement = () => {
			const product: QRProduct = { product: this.props.product.product }
			productIncrement({ product, shortId: this.props.shortId })
			this.props.incrementAmount()
		}

		const handleClickDecrement = () => {
			productDecrement(this.props.shortId)
			this.props.decrementAmount()
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
						itemAmount={itemAmount}
						onClickDecrement={handleClickDecrement}
						onClickIncrement={handleClickIncrement}
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
		decrementAmount: () => {
			dispatch(decrementAmount())
		},
	}
}

export default connect(null, mapDispatchToProps)(Cart)
