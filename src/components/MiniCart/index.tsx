import { Image } from 'components/Image'
import ProductAmount from 'components/ProductAmount'
import { ProductQueryProps } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import MainInfo from './MainInfo'

import * as S from './style'

export class MiniCart extends PureComponent<ProductQueryProps> {
	render() {
		const { name, brand, attributes, prices } = this.props
		return (
			<S.MiniCartContainer>
				<S.WrapperMainInfo>
					<MainInfo
						name={name}
						brand={brand}
						attributes={attributes}
						prices={prices}
					/>
					<ProductAmount isMiniCart />
				</S.WrapperMainInfo>
				<Image
					src={this.props.gallery[0]}
					width={121}
					height={190}
					cursor='default'
				/>
			</S.MiniCartContainer>
		)
	}
}

export default MiniCart
