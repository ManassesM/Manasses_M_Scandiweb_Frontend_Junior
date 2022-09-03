import arrowLeftLight from 'assets/icons/arrowLeftLight.svg'
import arrowRightLight from 'assets/icons/arrowRightLight.svg'
import { Image } from 'components/Image'
import { PureComponent } from 'react'
import * as S from './style'

interface ProductImageStateProps {
	currentImage: { img: string; idx: number }
}

interface ProductImageProps {
	images: string[]
}

export class ProductImage extends PureComponent<
	ProductImageProps,
	ProductImageStateProps
> {
	constructor(props: ProductImageProps) {
		super(props)
		this.state = {
			currentImage: { img: '', idx: 0 },
		}
	}

	render() {
		const images = this.props.images
		const currentImage = this.state.currentImage

		const handleSkipImage = (idx: number) => {
			if (idx < 0 || idx === images.length) return
			this.setState(() => ({ currentImage: { img: images[idx], idx } }))
		}

		return (
			<S.ProductImageContainer>
				<Image
					src={currentImage.img || images[0]}
					width={200}
					height={280}
					cursor='default'
				/>
				<S.ImageActionButtons>
					<div>
						<Image
							src={arrowLeftLight}
							width={18}
							height={18}
							onClick={() => handleSkipImage(currentImage.idx - 1)}
						/>
					</div>
					<div>
						<Image
							src={arrowRightLight}
							width={18}
							height={18}
							onClick={() => handleSkipImage(currentImage.idx + 1)}
						/>
					</div>
				</S.ImageActionButtons>
			</S.ProductImageContainer>
		)
	}
}

export default ProductImage
