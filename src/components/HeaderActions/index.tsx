import { PureComponent } from 'react'
import Currency from './Currency'
import MiniCart from './MiniCart'
import * as S from './style'

export class HeaderActions extends PureComponent {
	render() {
		return (
			<S.HeaderActionsContainer>
				<Currency />
				<MiniCart />
			</S.HeaderActionsContainer>
		)
	}
}

export default HeaderActions
