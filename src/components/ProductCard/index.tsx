import outofstock from 'assets/img/outofstock.svg'
import { Image } from 'components/Image'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { ProductProps } from 'queries/GET_PRODUCTS_BY_CATEGORY'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggleCartModal } from 'redux/features/cartModalSlice'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import { AppDispatch, RootState } from 'redux/store'
import { addToCart } from 'utils/AddToCart'
import { cartObject } from 'utils/CartObject'
import { getProductPrice } from 'utils/GetProductPrice'
import MiniCartButton from './MiniCartButton'

import * as S from './style'

interface ProductCardProps {
	currency: CurrencyProps
	product: ProductProps
	toggleCartModal: () => void
}

export class ProductCard extends PureComponent<ProductCardProps> {
	render() {
		const { id, inStock, prices, name, brand, gallery } = this.props.product
		const currency = this.props.currency

		const price = getProductPrice({ currency, prices })

		const handleMinicart = (e: any) => {
			e.preventDefault()

			const defaultProps =
				this.props.product.attributes.map<DefaultPropsObject>(
					({ id, items }) => {
						return {
							id,
							data: items[0],
						}
					}
				)

			const newProduct = cartObject({
				product: { product: this.props.product },
				defaultProps,
			})

			addToCart({ product: newProduct.product, defaultProps })
      this.props.toggleCartModal()
		}
    
		return (
			<S.ProductCardContainer to={`/products/${id}`}>
				<Image src={gallery[0]} width={354} height={330} />
				{!inStock ? (
					<S.Outofstock src={outofstock} width={354} height={330} />
				) : null}

				<S.ProductContent>
					<span>
						{brand} {name}
					</span>
					<strong>
						{price?.currency.symbol}
						{price?.amount}
					</strong>
				</S.ProductContent>

				{inStock && <MiniCartButton onClick={(e) => handleMinicart(e)} />}
			</S.ProductCardContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard)
