import { Button } from 'components/Button'
import Cart from 'components/Cart'
import { theme } from 'config/theme'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'
import { ReturnCartObjectProps } from 'utils/CartObject'
import { filteredCart } from 'utils/FilteredCart'
import { getTotalPrice } from 'utils/GetTotalPrice'
import { getFromLocalStorage } from 'utils/LocalStorage'

import * as S from './style'

interface CartContainerProps {
	currency: CurrencyProps
}

export class CartContainer extends PureComponent<CartContainerProps> {
	render() {
		const cartProducts: ReturnCartObjectProps[] = getFromLocalStorage('cart')
		const filteredProducts = filteredCart({ products: cartProducts })

		const { currency } = this.props
		let totalPrice = getTotalPrice(cartProducts, currency) || 0
		const taxes = Number((totalPrice * 0.21).toFixed(2))

		return (
			<S.CartContainer>
				<p>CART</p>

				<S.CartItems>
					{cartProducts?.map(({ product }) => {
						return (
							<Cart
								key={product.shortId}
								product={product}
								itemAmount={1}
							/>
						)
					})}
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
							{(totalPrice + taxes).toFixed(2)}
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
