import Items from 'containers/Attributes/Items'
import { AttributeProps as IAttribute } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'

import * as S from './style'

interface AttributesProps {
	attributes: IAttribute[]
	isMinicart?: boolean
}

export class Attributes extends PureComponent<AttributesProps> {
	render() {
		return (
			<>
				{this.props.attributes?.map((attribute) => (
					<S.WrapperAttributes
						key={attribute.id}
						isMinicart={this.props.isMinicart}
					>
						<p>{attribute.name}</p>
						<Items
							type={attribute.type}
							items={attribute.items}
							isMinicart={this.props.isMinicart}
						/>
					</S.WrapperAttributes>
				))}
			</>
		)
	}
}

export default Attributes
