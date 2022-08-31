import { CurrencyProps } from 'queries/GET_CURRENCIES'

interface GetProductPriceProps {
	currency: CurrencyProps
	prices: {
		amount: number
		currency: CurrencyProps
	}[]
}

export function getProductPrice({ currency, prices }: GetProductPriceProps) {
	return prices.find((price) => price.currency.symbol === currency.symbol)
}
