import { Button } from 'components/Button'
import { theme } from 'config/theme'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { ProductQueryProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import ReactHtmlParser from 'react-html-parser'
import { connect } from 'react-redux'
import { DefaultProps } from 'redux/features/defaultPropsSlice'
import { RootState } from 'redux/store'
import { getProductPrice } from 'utils/GetProductPrice'

import Attributes from './Attributes'
import * as S from './style'

interface ProductInfoProps extends ProductQueryProps {
	currency: CurrencyProps
	defaultProps: DefaultProps
	onClick: () => void
}

export class ProductInfo extends PureComponent<ProductInfoProps> {
	render() {
		const { inStock, currency, prices, attributes, brand, name, defaultProps } =
			this.props

		const price = getProductPrice({ currency, prices })
		const html = ReactHtmlParser(this.props.description || '')
		const isDisabled = (defaultProps.data?.length || 0) !== attributes.length

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

				<Button
					width={292}
					height={52}
					text={inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
					bgColor={theme.palette.main}
					txtColor={theme.palette.white}
					contained
					disabled={isDisabled || !inStock}
					onClick={this.props.onClick}
				/>

				<S.HtmlParser>{html}</S.HtmlParser>
			</S.ProductInfoContainer>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
	defaultProps: state.defaultProps,
})

export default connect(mapStateToProps)(ProductInfo)
