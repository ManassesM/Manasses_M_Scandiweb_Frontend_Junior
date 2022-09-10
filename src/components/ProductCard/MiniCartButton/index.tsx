import emptyCartLight from 'assets/icons/emptyCartLight.svg'
import { Image } from 'components/Image'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggleCartModal } from 'redux/features/cartModalSlice'
import { AppDispatch } from 'redux/store'

import * as S from './style'

interface MiniCartButtonProps {
	toggleCartModal: () => void
	onClick: (e: any) => void
}

export class MiniCartButton extends PureComponent<MiniCartButtonProps> {
	render() {
		return (
			<S.MiniCartButtonContainer onClick={this.props.onClick}>
				<Image
					src={emptyCartLight}
					width={24}
					height={24}
					alt='mini cart light'
				/>
			</S.MiniCartButtonContainer>
		)
	}
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		toggleCartModal: () => {
			dispatch(toggleCartModal())
		},
	}
}

export default connect(null, mapDispatchToProps)(MiniCartButton)
