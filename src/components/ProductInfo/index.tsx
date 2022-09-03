import { Button } from 'components/Button'
import { theme } from 'config/theme'
import Attributes from 'components/Cart/Attributes'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { ProductQueryProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'
import { getProductPrice } from 'utils/GetProductPrice'

import { Link } from 'react-router-dom'
import * as S from './style'

interface ProductInfoProps extends ProductQueryProps {
	currency: CurrencyProps
  onClick: () => void
}

export class ProductInfo extends PureComponent<ProductInfoProps> {
	render() {
		const { currency, prices, attributes, brand, name } = this.props

		const price = getProductPrice({ currency, prices })
		const html = ReactHtmlParser(this.props.description || '')

		return (
			<S.ProductInfoContainer>
				<S.InfoText>
					<strong>{brand}</strong>
					<p>{name}</p>
				</S.InfoText>

				<Attributes attributes={attributes} />

				<S.WrapperAttributes>
					<p>Price</p>
					<S.PriceText>
						{currency.symbol} {price?.amount}
					</S.PriceText>
				</S.WrapperAttributes>

				<Link to='/cart'>
					<Button
						width={292}
						height={52}
						text='ADD TO CART'
						bgColor={theme.palette.main}
						txtColor={theme.palette.white}
						contained
						disabled={!this.props.inStock}
            onClick={this.props.onClick}
					/>
				</Link>

				<S.HtmlParser>{html}</S.HtmlParser>
			</S.ProductInfoContainer>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
})

export default connect(mapStateToProps)(ProductInfo)
