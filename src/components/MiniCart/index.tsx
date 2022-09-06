import { Image } from 'components/Image'
import ProductAmount from 'components/ProductAmount'
import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
	decrementAmount,
	incrementAmount,
} from 'redux/features/cartAmountSlice'
import { AppDispatch } from 'redux/store'
import { addToCart } from 'utils/AddToCart'
import { ProductProps } from 'utils/CartObject'
import { getDefaultAttributes } from 'utils/GetDefaultAttributes'
import { getFromLocalStorage, setToLocalStorage } from 'utils/LocalStorage'
import MainInfo from './MainInfo'

import * as S from './style'

interface MiniCartProps {
	product: ProductProps
	shortId: string
	itemAmount?: number
	incrementAmount: () => void
	decrementAmount: () => void
}

export class MiniCart extends PureComponent<MiniCartProps> {
	render() {
		const { name, brand, attributes, prices, gallery } =
			this.props.product.product

		const handleClickIncrement = () => {
			const product: QRProduct = { product: this.props.product.product }
			const defaultProps = getDefaultAttributes(this.props.product.shortId)

			addToCart({ product, defaultProps })
			this.props.incrementAmount()
		}

		const handleClickDecrement = () => {
			const cartProducts = getFromLocalStorage('cart')
			const filteredProducts = cartProducts.filter(
				({ product }) => product.shortId !== this.props.shortId
			)

			setToLocalStorage('cart', filteredProducts)
			this.props.decrementAmount()
		}

		return (
			<S.MiniCartContainer>
				<S.WrapperMainInfo>
					<MainInfo
						shortId={this.props.product.shortId}
						name={name}
						brand={brand}
						attributes={attributes}
						prices={prices}
					/>
					<ProductAmount
						isMiniCart
						itemAmount={this.props.itemAmount || 0}
						onClickDecrement={handleClickDecrement}
						onClickIncrement={handleClickIncrement}
					/>
				</S.WrapperMainInfo>
				<Image src={gallery[0]} width={121} height={190} cursor='default' />
			</S.MiniCartContainer>
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

export default connect(null, mapDispatchToProps)(MiniCart)
