import arrowDown from 'assets/icons/arrowDown.svg'
import arrowUp from 'assets/icons/arrowUp.svg'
import { Image } from 'components/Image'
import { Popper } from 'components/Popper'
import { CurrencyProps as ICurrency } from 'queries/GET_CURRENCIES'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CartModalProps, toggleCartModal } from 'redux/features/cartModalSlice'
import {
	CurrencyModalProps,
	toggleCurrencyModal,
} from 'redux/features/currencyModalSlice'
import { AppDispatch, RootState } from 'redux/store'
import CurrencyItems from './CurrencyItems'

import * as S from './style'

interface CurrencyProps {
	currency: ICurrency
	currencyModal: CurrencyModalProps
	cartModal: CartModalProps
	toggleCurrencyModal: () => void
	toggleCartModal: () => void
}

export class Currency extends PureComponent<CurrencyProps> {
	render() {
		const handleToggleModal = () => {
			if (this.props.cartModal.open) this.props.toggleCartModal()
			this.props.toggleCurrencyModal()
		}

		return (
			<>
				<S.CurrencyContainer onClick={handleToggleModal}>
					<p>{this.props.currency.symbol || ''}</p>
					<Image
						src={this.props.currencyModal.open ? arrowUp : arrowDown}
						width={6}
						height={3}
					/>
				</S.CurrencyContainer>

				<Popper
					close={this.props.currencyModal.open}
					onClose={handleToggleModal}
				>
					<CurrencyItems />
				</Popper>
			</>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	currency: state.currency,
	currencyModal: state.currencyModal,
	cartModal: state.cartModal,
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		toggleCurrencyModal: () => {
			dispatch(toggleCurrencyModal())
		},
		toggleCartModal: () => {
			dispatch(toggleCartModal())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Currency)
