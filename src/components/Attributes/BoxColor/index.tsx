import { ItemProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import * as S from './style'

interface BoxColorProps extends ItemProps {
	isMinicart?: boolean
	active?: boolean
	isHover?: boolean
}

export class BoxColor extends PureComponent<BoxColorProps> {
	render() {
		return (
			<S.WrapperBoxColor
				active={this.props.active || false}
				isMinicart={this.props.isMinicart}
				isHover={this.props.isHover || false}
			>
				<S.BoxColorContainer
					active={this.props.active || false}
					bgColor={this.props.value}
					isMinicart={this.props.isMinicart}
					isHover={this.props.isHover || false}
				/>
			</S.WrapperBoxColor>
		)
	}
}

export default BoxColor
