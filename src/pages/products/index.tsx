import PageContainer from 'containers/PageContainer'
import ProductsContainer from 'containers/Products'
import { PureComponent } from 'react'

export class Products extends PureComponent {
	render() {
		return (
			<PageContainer hasTitle>
				<ProductsContainer />
			</PageContainer>
		)
	}
}

export default Products
