import PageContainer from 'containers/PageContainer'
import ProductContainer from 'containers/Product'
import { PureComponent } from 'react'

export class Product extends PureComponent {
	render() {
		return (
			<PageContainer>
				<ProductContainer />
			</PageContainer>
		)
	}
}

export default Product
