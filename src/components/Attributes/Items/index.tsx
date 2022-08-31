import { ItemProps, ProductAttributesTypes } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import BoxColor from '../BoxColor'
import BoxText from '../BoxText'

interface ItemsProps {
	items: ItemProps[]
	type: ProductAttributesTypes
}
export class Items extends PureComponent<ItemsProps> {
	render() {
		return (
			<div>
				{this.props.items.map((item) => {
					if (this.props.type === 'text') return <BoxText {...item} />
					if (this.props.type === 'swatch') return <BoxColor {...item} />
					return null
				})}
			</div>
		)
	}
}

export default Items
