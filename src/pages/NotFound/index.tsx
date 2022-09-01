import EmptyCart from 'assets/icons/emptyCart.svg'
import { Image } from 'components/Image'
import PageContainer from 'containers/PageContainer'
import { PureComponent } from 'react'
import { Link } from 'react-router-dom'

import * as S from './style'

class NotFound extends PureComponent {
	render() {
		return (
			<PageContainer>
				<S.ContainerNotFound>
					<h3>Page Not Found!</h3>

					<Link to='/'>
						<Image
							src={EmptyCart}
							alt='Empty Cart'
							width={150}
							height={150}
							rotateDeg={-25}
						/>
						<span>Go Back to Shopping</span>
					</Link>
				</S.ContainerNotFound>
			</PageContainer>
		)
	}
}

export default NotFound