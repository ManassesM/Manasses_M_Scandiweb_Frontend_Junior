import { Button } from 'components/Button'
import Cart from 'components/Cart'
import { theme } from 'config/theme'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'
import { getTotalPrice } from 'utils/GetTotalPrice'
import { getFromLocalStorage } from 'utils/LocalStorage'

import * as S from './style'

interface CartContainerProps {
	currency: CurrencyProps
}

export class CartContainer extends PureComponent<CartContainerProps> {
	render() {
		const cartProducts: QRProduct[] = getFromLocalStorage('cart')
		const { currency } = this.props
		let totalPrice = getTotalPrice(cartProducts, currency)
		const taxes = Number((totalPrice * 0.21).toFixed(2))

		return (
			<S.CartContainer>
				<p>CART</p>

				<S.CartItems>
					{cartProducts?.map(({ product }) => (
						<Cart {...product} key={product.id} />
					))}
				</S.CartItems>

				<S.CartTotal>
					<S.InfoText>
						<p>Tax: 21%:</p>
						<strong>
							{currency.symbol}
							{taxes}
						</strong>
					</S.InfoText>
					<S.InfoText>
						<p>Quantity:</p>
						<strong>{cartProducts?.length || 0}</strong>
					</S.InfoText>
					<S.InfoText>
						<p>Total:</p>
						<strong>
							{currency.symbol}
							{totalPrice + taxes}
						</strong>
					</S.InfoText>
				</S.CartTotal>
				<Button
					width={279}
					height={43}
					text='ORDER'
					bgColor={theme.palette.main}
					txtColor={theme.palette.white}
					contained
					onClick={() =>
						alert('Done!\nHave a great day Dev at Scandiweb 💻\nBy Manassés M.')
					}
				/>
			</S.CartContainer>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
})

export default connect(mapStateToProps)(CartContainer)
