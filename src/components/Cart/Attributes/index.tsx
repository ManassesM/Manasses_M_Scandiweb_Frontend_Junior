import Items from 'components/Cart/Attributes/Items'
import { AttributeProps as IAttribute } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import { WrapperAttributesStyle } from 'styles/attributes'

interface AttributesProps {
	attributes: IAttribute[]
	defaultAttributes: DefaultPropsObject[]
}

export class Attributes extends PureComponent<AttributesProps> {
	render() {
		let defaultAttributes = this.props.defaultAttributes || []

		return (
			<>
				{this.props.attributes?.map((attribute) => (
					<WrapperAttributesStyle key={attribute.id}>
						<p>{attribute.name}</p>
						<Items
							id={attribute.id}
							type={attribute.type}
							items={attribute.items}
							defaultAttributes={defaultAttributes}
						/>
					</WrapperAttributesStyle>
				))}
			</>
		)
	}
}

export default Attributes
