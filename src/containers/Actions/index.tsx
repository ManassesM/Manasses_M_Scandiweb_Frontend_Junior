import Currency from 'components/Currency'
import MiniCart from 'components/MiniCart'
import { PureComponent } from 'react'

import * as S from './style'

export class Actions extends PureComponent {
	render() {
		return (
			<S.ActionsContainer>
				<Currency />
				<MiniCart />
			</S.ActionsContainer>
		)
	}
}

export default Actions
