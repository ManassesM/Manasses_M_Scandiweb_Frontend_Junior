import gql from 'graphql-tag'

export interface CurrencyProps {
	label: string
	symbol: string
}

export interface QRCurrencies {
	currencies: CurrencyProps[]
}

export const GET_CURRENCIES = gql`
	query Currencies {
		currencies {
			label
			symbol
		}
	}
`
