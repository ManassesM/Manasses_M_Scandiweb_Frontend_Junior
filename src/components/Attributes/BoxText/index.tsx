import { ItemProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import * as S from './style'

export class BoxText extends PureComponent<ItemProps> {
	render() {
		return (
			<S.BoxTextContainer active={false}>
				<p>{this.props.value}</p>
			</S.BoxTextContainer>
		)
	}
}

export default BoxText
