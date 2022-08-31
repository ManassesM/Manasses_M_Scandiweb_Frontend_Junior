import emptyCart from 'assets/icons/emptyCart.svg'
import Modal from 'components/Modal'
import { PureComponent } from 'react'
import * as S from './style'

interface MiniCartStateProps {
	modal: boolean
}
export class MiniCart extends PureComponent<{}, MiniCartStateProps> {
	constructor(props: MiniCartStateProps) {
		super(props)
		this.state = {
			modal: false,
		}
	}

	toggleModal = () => {
		this.setState((prev) => ({ modal: !prev.modal }))
	}

	render() {
		const amount = 2 // TODO: remove

		return (
			<>
				<S.MiniCartContainer>
					<S.MiniCart
						src={emptyCart}
						width={20}
						height={20}
						content={0}
						onClick={this.toggleModal}
					/>
					{amount ? <S.CartAmount>{amount}</S.CartAmount> : null}
				</S.MiniCartContainer>
				<Modal
					close={this.state.modal}
					onClose={this.toggleModal}
					width={325}
					height={677}
				>
					Currency {/* TODO: get it from cart query */}
				</Modal>
			</>
		)
	}
}

export default MiniCart
