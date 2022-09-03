import Attributes from 'containers/Attributes'
import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { AttributeProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'
import { getProductPrice } from 'utils/GetProductPrice'

import * as S from './style'

interface MainInfoProps {
	attributes: AttributeProps[]
	brand: string
	name: string
	currency: CurrencyProps
	prices: any
}

export class MainInfo extends PureComponent<MainInfoProps> {
	render() {
		const { currency, name, brand, attributes, prices } = this.props
		const price = getProductPrice({ currency, prices })

		return (
			<div>
				<S.InfoText>
					<strong>{brand}</strong>
					<p>{name}</p>
				</S.InfoText>

				<S.PriceText>
					{currency.symbol}
					{price?.amount}
				</S.PriceText>

				<Attributes attributes={attributes} />
			</div>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
})

export default connect(mapStateToProps)(MainInfo)
