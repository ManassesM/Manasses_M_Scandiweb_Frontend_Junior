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
import { connect } from 'react-redux'
import { incrementAmount } from 'redux/features/cartAmountSlice'
import {
	DefaultProps,
	updateDefaultProps,
} from 'redux/features/defaultPropsSlice'
import { AppDispatch, RootState } from 'redux/store'
import { addToCart } from 'utils/AddToCart'

import * as S from './style'

interface ProductContainerStateProps {
	currentImg: string
}

interface ProductContainerProps {
	defaultProps: DefaultProps
	changeDefaultProps: (defaultProps?: DefaultProps) => void
	incrementAmount: () => void
}

export class ProductContainer extends PureComponent<
	ProductContainerProps,
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

		const handleAddToCart = (product: QRProduct) => {
			addToCart({ product, defaultProps: this.props.defaultProps.data || [] })
			this.props.incrementAmount()
			this.props.changeDefaultProps({})
		}

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
							<ProductInfo
								{...(data?.product as ProductQueryProps)}
								onClick={() => data && handleAddToCart(data)}
							/>
						</S.ProductGrid>
					)
				}}
			</Query>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	defaultProps: state.defaultProps,
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		changeDefaultProps: (defaultProps: DefaultProps) => {
			dispatch(updateDefaultProps(defaultProps))
		},

		incrementAmount: () => {
			dispatch(incrementAmount())
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
