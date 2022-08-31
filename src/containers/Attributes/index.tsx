import Items from 'components/Attributes/Items'
import { AttributeProps as IAttribute } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import * as S from './style'

interface AttributesProps {
	attributes: IAttribute[]
}

export class Attributes extends PureComponent<AttributesProps> {
	render() {
		console.log(this.props.attributes)
		return (
			<S.AttributesContainer>
				{this.props.attributes.map((attribute) => (
					<S.WrapperAttributes>
						<p>{attribute.name}</p>
						<Items type={attribute.type} items={attribute.items} />
					</S.WrapperAttributes>
				))}
			</S.AttributesContainer>
		)
	}
}

export default Attributes
