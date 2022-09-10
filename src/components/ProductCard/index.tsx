import outofstock from 'assets/img/outofstock.svg'
import { Image } from 'components/Image'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { ProductProps } from 'queries/GET_PRODUCTS_BY_CATEGORY'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'
import { getProductPrice } from 'utils/GetProductPrice'
import MiniCartButton from './MiniCartButton'

import * as S from './style'

interface ProductCardProps extends ProductProps {
	currency: CurrencyProps
}

export class ProductCard extends PureComponent<ProductCardProps> {
	render() {
		const { inStock, prices, name, brand, currency } = this.props

		const price = getProductPrice({ currency, prices })

		return (
			<S.ProductCardContainer to={`/products/${this.props.id}`}>
				<Image src={this.props.gallery[0]} width={354} height={330} />
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

				{inStock && <MiniCartButton />}
			</S.ProductCardContainer>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
})

export default connect(mapStateToProps)(ProductCard)
