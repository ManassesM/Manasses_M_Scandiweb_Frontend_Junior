import { PureComponent } from 'react'

export class ProductContainer extends PureComponent {
	render() {
		const productId = window.location.pathname.split('/')[2]

		return <div>{productId}</div>
	}
}

export default ProductContainer
