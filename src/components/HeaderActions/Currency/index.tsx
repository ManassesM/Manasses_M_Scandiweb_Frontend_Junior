import arrowDown from 'assets/icons/arrowDown.svg'
import arrowUp from 'assets/icons/arrowUp.svg'
import { Image } from 'components/Image'
import { Popper } from 'components/Popper'
import { PureComponent } from 'react'

import * as S from './style'

interface CurrencyStateProps {
	modal: boolean
}

export class Currency extends PureComponent<{}, CurrencyStateProps> {
	constructor(props: CurrencyStateProps) {
		super(props)
		this.state = {
			modal: false,
		}
	}

	toggleModal = () => {
		this.setState((prev) => ({ modal: !prev.modal }))
	}

	render() {
		return (
			<>
				<S.CurrencyContainer onClick={this.toggleModal}>
					<p>$</p> {/* TODO: get it from redux */}
					<Image
						src={this.state.modal ? arrowUp : arrowDown}
						width={6}
						height={3}
					/>
				</S.CurrencyContainer>
				<Popper
					close={this.state.modal}
					onClose={this.toggleModal}
					width={114}
					height={200}
				>
					Currency {/* TODO: get it from currency query */}
				</Popper>
			</>
		)
	}
}

export default Currency
