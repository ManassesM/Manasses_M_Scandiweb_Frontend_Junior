import { Currency, MiniCart } from 'components/Actions'
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
