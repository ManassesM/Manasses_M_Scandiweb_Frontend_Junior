import { Button } from 'components/Button'
import { theme } from 'config/theme'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { ProductQueryProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'
import { getProductPrice } from 'utils/GetProductPrice'

import * as S from './style'

interface ProductInfoProps extends ProductQueryProps {
	currency: CurrencyProps
}

export class ProductInfo extends PureComponent<ProductInfoProps> {
	render() {
		const { currency, prices } = this.props
		const price = getProductPrice({ currency, prices })
		const html = this.props.description || ''
		console.log(html)
		return (
			<S.ProductInfoContainer>
				<S.InfoText>
					<strong>{this.props.brand}</strong>
					<p>{this.props.name}</p>
				</S.InfoText>

				<S.WrapperAttributes>
					<p>Size</p>
					<div>sizes</div>
				</S.WrapperAttributes>

				<S.WrapperAttributes>
					<p>Color</p>
					<div>colors</div>
				</S.WrapperAttributes>

				<S.WrapperAttributes>
					<p>Price</p>
					<S.PriceText>
						{currency.symbol} {price?.amount}
					</S.PriceText>
				</S.WrapperAttributes>

				<Button
					width={292}
					height={52}
					text='ADD TO CART'
					bgColor={theme.palette.main}
					txtColor={theme.palette.white}
					contained
					disabled={!this.props.inStock}
				/>

				<S.HtmlParser>{ReactHtmlParser(html)}</S.HtmlParser>
			</S.ProductInfoContainer>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
})

export default connect(mapStateToProps)(ProductInfo)
