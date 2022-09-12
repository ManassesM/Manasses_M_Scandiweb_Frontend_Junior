import { Image } from 'components/Image'
import ProductAmount from 'components/ProductAmount'
import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
	decrementAmount,
	incrementAmount,
} from 'redux/features/cartAmountSlice'
import { toggleCartModal } from 'redux/features/cartModalSlice'
import { AppDispatch } from 'redux/store'
import { ProductProps } from 'utils/CartObject'
import { productDecrement } from 'utils/ProductDecrement'
import { productIncrement } from 'utils/ProductIncrement'
import MainInfo from './MainInfo'

import * as S from './style'

interface MiniCartProps {
	product: ProductProps
	shortId: string
	itemAmount?: number
	incrementAmount: () => void
	decrementAmount: () => void
	toggleCartModal: () => void
}

export class MiniCart extends PureComponent<MiniCartProps> {
	render() {
		const itemAmount = this.props.itemAmount || 0

		const { name, brand, attributes, prices, gallery } =
			this.props.product.product

		const handleClickIncrement = () => {
			const product: QRProduct = { product: this.props.product.product }
			productIncrement({ product, shortId: this.props.shortId })
			this.props.incrementAmount()
      this.props.toggleCartModal()
		}

		const handleClickDecrement = () => {
			productDecrement(this.props.shortId)
			this.props.decrementAmount()
      this.props.toggleCartModal()
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
						itemAmount={itemAmount}
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
    toggleCartModal: () => {
      dispatch(toggleCartModal())
    }
	}
}

export default connect(null, mapDispatchToProps)(MiniCart)
