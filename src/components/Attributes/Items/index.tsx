import { ItemProps, ProductAttributesTypes } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import BoxColor from '../BoxColor'
import BoxText from '../BoxText'

import * as S from './style'

interface ItemsProps {
	items: ItemProps[]
	type: ProductAttributesTypes
	isMinicart?: boolean
}

export class Items extends PureComponent<ItemsProps> {
	render() {
		return (
			<S.Grid>
				{this.props.items?.map((item) => {
					if (this.props.type === 'text')
						return (
							<BoxText
								key={item.id}
								isMinicart={this.props.isMinicart}
								{...item}
							/>
						)
					if (this.props.type === 'swatch')
						return (
							<BoxColor
								key={item.id}
								isMinicart={this.props.isMinicart}
								{...item}
							/>
						)
					return null
				})}
			</S.Grid>
		)
	}
}

export default Items
