import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { AttributeProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'
import { getDefaultAttributes } from 'utils/GetDefaultAttributes'
import { getProductPrice } from 'utils/GetProductPrice'
import Attributes from '../Attributes'

import * as S from './style'

interface MainInfoProps {
	id: string
	attributes: AttributeProps[]
	brand: string
	name: string
	currency: CurrencyProps
	prices: any
}

export class MainInfo extends PureComponent<MainInfoProps> {
	render() {
		const { id, currency, name, brand, attributes, prices } = this.props
		const price = getProductPrice({ currency, prices })
		const defaultAttributes = getDefaultAttributes(id)

		return (
			<S.MainInfoContent>
				<S.InfoText>
					<p>{brand}</p>
					<p>{name}</p>
				</S.InfoText>

				<S.PriceText>
					{currency.symbol}
					{price?.amount}
				</S.PriceText>

				<Attributes
					attributes={attributes}
					defaultAttributes={defaultAttributes}
				/>
			</S.MainInfoContent>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
})

export default connect(mapStateToProps)(MainInfo)
