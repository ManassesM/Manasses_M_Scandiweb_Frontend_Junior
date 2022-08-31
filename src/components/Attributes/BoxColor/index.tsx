import { ItemProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import * as S from './style'

export class BoxColor extends PureComponent<ItemProps> {
	render() {
		return (
			<S.WrapperBoxColor active={false}>
				<S.BoxColorContainer active={true} bgColor={this.props.value} />
			</S.WrapperBoxColor>
		)
	}
}

export default BoxColor
