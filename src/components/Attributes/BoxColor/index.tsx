import { ItemProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import * as S from './style'

interface BoxColorProps extends ItemProps {
	isMinicart?: boolean
}

export class BoxColor extends PureComponent<BoxColorProps> {
	render() {
		return (
			<S.WrapperBoxColor active={false} isMinicart={this.props.isMinicart}>
				<S.BoxColorContainer
					active={true}
					bgColor={this.props.value}
					isMinicart={this.props.isMinicart}
				/>
			</S.WrapperBoxColor>
		)
	}
}

export default BoxColor
