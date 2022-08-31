import Gallery from 'components/Gallery'
import { Image } from 'components/Image'
import { LoadingSpinner } from 'components/LoadingSpinner'
import ProductInfo from 'components/ProductInfo'
import {
	GET_PRODUCT_BY_ID,
	ProductQueryProps,
	QRProduct,
} from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { Query, QueryResult } from 'react-apollo'

import * as S from './style'

interface ProductContainerStateProps {
	currentImg: string
}

export class ProductContainer extends PureComponent<
	{},
	ProductContainerStateProps
> {
	constructor(props: any) {
		super(props)
		this.state = {
			currentImg: '',
		}
	}

	render() {
		const id = window.location.pathname.split('/')[2]

		const handleCurrentImg = (img: string) => this.setState({ currentImg: img })

		return (
			<Query query={GET_PRODUCT_BY_ID} variables={{ id }}>
				{({ data, loading }: QueryResult<QRProduct>) => {
					if (loading) return <LoadingSpinner />

					return (
						<S.ProductGrid>
							<Gallery
								images={data?.product.gallery || []}
								onClickItem={handleCurrentImg}
								currentImage={this.state.currentImg}
							/>
							<Image
								src={this.state.currentImg || data?.product.gallery[0] || ''}
								width={610}
								height={511}
								cursor='default'
							/>
							<ProductInfo {...(data?.product as ProductQueryProps)} />
						</S.ProductGrid>
					)
				}}
			</Query>
		)
	}
}

export default ProductContainer
