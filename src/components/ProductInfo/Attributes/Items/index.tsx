import { ItemProps, ProductAttributesTypes } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'
import { activeProp } from 'utils/ActiveProp'
import BoxColor from '../../../Attributes/BoxColor'
import BoxText from '../../../Attributes/BoxText'

import * as S from './style'

interface ItemsProps {
	id: string
	items: ItemProps[]
	type: ProductAttributesTypes
	onClick: (item: DefaultPropsObject) => void
	defaultProps: DefaultPropsObject[]
}

export class Items extends PureComponent<ItemsProps> {
	render() {
		const handleClickBox = (data: ItemProps) => {
			const defaultItems = { id: this.props.id, data } as DefaultPropsObject
			this.props.onClick(defaultItems)
		}

		const isActive = (item: ItemProps) =>
			activeProp({
				item,
				props: this.props.defaultProps,
				section: this.props.id,
			})

		return (
			<S.ItemsContainer>
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
			</S.ItemsContainer>
		)
	}
}

export default Items
