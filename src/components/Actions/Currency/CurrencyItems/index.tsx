import { LoadingSpinner } from 'components/LoadingSpinner'
import {
	CurrencyProps,
	GET_CURRENCIES,
	QRCurrencies,
} from 'queries/GET_CURRENCIES'
import { PureComponent } from 'react'
import { Query, QueryResult } from 'react-apollo'
import { connect } from 'react-redux'
import { toggleCurrencyModal } from 'redux/features/currencyModalSlice'
import { changeCurrency } from 'redux/features/currencySlice'
import { AppDispatch, RootState } from 'redux/store'

import * as S from './style'

interface CurrencyItemsProps {
	currency: CurrencyProps
	toggleCurrencyModal: () => void
	onChangeCurrency: (currency: CurrencyProps) => void
}

export class CurrencyItems extends PureComponent<CurrencyItemsProps> {
	render() {
		const handleChangeCurrency = (currency: CurrencyProps) => {
			this.props.onChangeCurrency(currency)
			this.props.toggleCurrencyModal()
		}

		return (
			<Query query={GET_CURRENCIES}>
				{({ data, loading }: QueryResult<QRCurrencies>) => {
					if (loading) return <LoadingSpinner />

					return (
						<>
							{data?.currencies.map((currency) => (
								<S.CurrencyItem
									key={currency.label}
									active={this.props.currency.label === currency.label}
									onClick={() => handleChangeCurrency(currency)}
								>
									<span>
										{currency.symbol} {currency.label}
									</span>
								</S.CurrencyItem>
							))}
						</>
					)
				}}
			</Query>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
})

const mapToDispatchProps = (dispatch: AppDispatch) => {
	return {
		onChangeCurrency: (currency: CurrencyProps) => {
			dispatch(changeCurrency(currency))
		},
		toggleCurrencyModal: () => {
			dispatch(toggleCurrencyModal())
		},
	}
}

export default connect(mapStateToProps, mapToDispatchProps)(CurrencyItems)
