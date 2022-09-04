import { ItemProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import * as S from './style'

interface BoxTextProps extends ItemProps {
	isMinicart?: boolean
	active?: boolean
}

export class BoxText extends PureComponent<BoxTextProps> {
	render() {
		return (
			<S.BoxTextContainer
				active={this.props.active || false}
				isMinicart={this.props.isMinicart || false}
			>
				<p>{this.props.value}</p>
			</S.BoxTextContainer>
		)
	}
}

export default BoxText
