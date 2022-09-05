import { Image } from 'components/Image'
import ProductAmount from 'components/ProductAmount'
import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { incrementAmount } from 'redux/features/cartAmountSlice'
import { AppDispatch } from 'redux/store'
import { addToCart } from 'utils/AddToCart'
import { ProductProps } from 'utils/CartObject'
import { getDefaultAttributes } from 'utils/GetDefaultAttributes'
import MainInfo from './MainInfo'

import * as S from './style'

interface MiniCartProps {
	product: ProductProps
	itemAmount?: number
	incrementAmount: () => void
}

export class MiniCart extends PureComponent<MiniCartProps> {
	render() {
		const { id, name, brand, attributes, prices, gallery } =
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
						onClickDecrement={() => console.log('Decrement')}
						onClickIncrement={() => handleClick('increment')}
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
	}
}

export default connect(null, mapDispatchToProps)(MiniCart)
