import emptyCartLight from 'assets/icons/emptyCartLight.svg'
import { Image } from 'components/Image'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { toggleCartModal } from 'redux/features/cartModalSlice'
import { AppDispatch } from 'redux/store'

import * as S from './style'

interface MiniCartButtonProps {
	toggleCartModal: () => void
}

export class MiniCartButton extends PureComponent<MiniCartButtonProps> {
	render() {
		const handleClickMiniCart = (e: any) => {
			e.preventDefault()
			e.stopPropagation()
			this.props.toggleCartModal()
		}

		return (
			<S.MiniCartButtonContainer onClick={handleClickMiniCart}>
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
