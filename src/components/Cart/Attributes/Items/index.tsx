import { ItemProps, ProductAttributesTypes } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import { ItemsContainerStyle } from 'styles/attributes'
import { activeProp } from 'utils/ActiveProp'
import BoxColor from '../../../Attributes/BoxColor'
import BoxText from '../../../Attributes/BoxText'

interface ItemsProps {
	id: string
	items: ItemProps[]
	type: ProductAttributesTypes
	onClick?: (item: DefaultPropsObject) => void
	defaultAttributes: DefaultPropsObject[]
}

export class Items extends PureComponent<ItemsProps> {
	render() {
		const handleClickBox = (data: ItemProps) => {
			const defaultItems = { id: this.props.id, data } as DefaultPropsObject
			this.props.onClick && this.props.onClick(defaultItems)
		}

		const isActive = (item: ItemProps) =>
			activeProp({
				item,
				props: this.props.defaultAttributes,
				section: this.props.id,
			})

		return (
			<ItemsContainerStyle>
				{this.props.items?.map((item) => {
					if (this.props.type === 'text')
						return (
							<div key={item.id} onClick={() => handleClickBox(item)}>
								<BoxText key={item.id} {...item} active={isActive(item)} />
							</div>
						)
					if (this.props.type === 'swatch')
						return (
							<div key={item.id} onClick={() => handleClickBox(item)}>
								<BoxColor key={item.id} {...item} active={isActive(item)} />
							</div>
						)
					return null
				})}
			</ItemsContainerStyle>
		)
	}
}

export default Items
