import { Button } from 'components/Button'
import MiniCart from 'components/MiniCart'
import { theme } from 'config/theme'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { toggleCartModal } from 'redux/features/cartModalSlice'
import { AppDispatch, RootState } from 'redux/store'
import { getTotalPrice } from 'utils/GetTotalPrice'
import { getFromLocalStorage } from 'utils/LocalStorage'

import * as S from './style'

interface MiniCartContainerProps {
	currency: CurrencyProps
	toggleCartModal: () => void
}

export class MiniCartContainer extends PureComponent<MiniCartContainerProps> {
	render() {
		const cartProducts: QRProduct[] = getFromLocalStorage('cart')
		const { currency } = this.props
		const totalPrice = getTotalPrice(cartProducts, currency)

		return (
			<S.MiniCartContainer>
				<div>
					<p>
						<strong>My Bag, </strong>
						{cartProducts?.length} items
					</p>
				</div>
				<S.WrapperMiniCart>
					{cartProducts?.map(({ product }) => (
						<MiniCart {...product} key={product.id} />
					))}
				</S.WrapperMiniCart>
				<S.Total>
					<p>Total</p>
					<strong>
						{currency.symbol}
						{totalPrice.toFixed(2)}
					</strong>
				</S.Total>
				<S.Buttons>
					<Link to='/cart'>
						<Button
							width={140}
							height={43}
							text='View Bag'
							contained
							borderColor={theme.palette.black}
							onClick={() => this.props.toggleCartModal()}
						/>
					</Link>
					<Link to='/cart'>
						<Button
							width={140}
							height={43}
							text='Check Out'
							bgColor={theme.palette.main}
							txtColor={theme.palette.white}
							contained
							onClick={() => this.props.toggleCartModal()}
						/>
					</Link>
				</S.Buttons>
			</S.MiniCartContainer>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		toggleCartModal: () => {
			dispatch(toggleCartModal())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MiniCartContainer)
