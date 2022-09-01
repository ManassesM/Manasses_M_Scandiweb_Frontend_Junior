import CartContainer from 'containers/Cart'
import PageContainer from 'containers/PageContainer'
import { PureComponent } from 'react'

export class Cart extends PureComponent {
	render() {
		return (
			<PageContainer>
				<CartContainer />
			</PageContainer>
		)
	}
}

export default Cart
