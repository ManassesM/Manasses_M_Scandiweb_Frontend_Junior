import { AttributeProps as IAttribute } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import Items from './Items'

import * as S from './style'

interface AttributesProps {
	attributes: IAttribute[]
}

export class Attributes extends PureComponent<AttributesProps> {
	render() {
		return (
			<>
				{this.props.attributes?.map((attribute) => (
					<S.WrapperAttributes key={attribute.id}>
						<p>{attribute.name}</p>
						<Items type={attribute.type} items={attribute.items} />
					</S.WrapperAttributes>
				))}
			</>
		)
	}
}

export default Attributes
