import { ItemProps, ProductAttributesTypes } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import BoxColor from '../../../Attributes/BoxColor'
import BoxText from '../../../Attributes/BoxText'

import * as S from './style'

interface ItemsProps {
	items: ItemProps[]
	type: ProductAttributesTypes
}

export class Items extends PureComponent<ItemsProps> {
	render() {
		return (
			<S.ItemsContainer>
				{this.props.items?.map((item) => {
					if (this.props.type === 'text')
						return <BoxText key={item.id} {...item} />
					if (this.props.type === 'swatch')
						return <BoxColor key={item.id} {...item} />
					return null
				})}
			</S.ItemsContainer>
		)
	}
}

export default Items
