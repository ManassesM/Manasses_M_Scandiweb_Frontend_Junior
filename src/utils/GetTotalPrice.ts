import { CurrencyProps } from 'queries/GET_CURRENCIES'
import { QRProduct } from 'queries/GET_PRODUCT_BY_ID'

interface AmountProps {
	currency: CurrencyProps
	amount: number
}

export function getTotalPrice(products: QRProduct[], { label }: CurrencyProps) {
	const prices = products?.map(({ product }) => product.prices)

	const productsByCurrency = prices?.map((p) =>
		p.find(({ currency }) => currency.label === label)
	) as AmountProps[]

	return productsByCurrency?.reduce((acc, { amount }) => acc + amount, 0)
}
