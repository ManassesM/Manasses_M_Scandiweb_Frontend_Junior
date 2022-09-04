import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { CartObjectProps } from './CartObject'

interface AmountProps {
	currency: CurrencyProps
	amount: number
}

export function getTotalPrice(
	products: CartObjectProps[],
	{ label }: CurrencyProps
) {
	const prices = products?.map(({ product }) => product.product.prices)
	const productsByCurrency = prices?.map((p) =>
		p.find(({ currency }) => currency.label === label)
	) as AmountProps[]

	return productsByCurrency?.reduce((acc, { amount }) => acc + amount, 0) || 0
}
