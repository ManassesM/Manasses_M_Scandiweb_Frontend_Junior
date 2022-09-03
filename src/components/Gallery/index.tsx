import { Image } from 'components/Image'
import { PureComponent } from 'react'

import * as S from './style'

interface GalleryProps {
	images: string[]
	onClickItem: (img: string) => void
	currentImage: string
}

export class Gallery extends PureComponent<GalleryProps> {
	render() {
		return (
			<S.Gallery>
				{this.props.images?.map((img) => (
					<Image
						key={img}
						cursor={this.props.currentImage !== img ? 'pointer' : 'default'}
						src={img}
						width={80}
						height={80}
						onClick={() => this.props.onClickItem(img)}
					/>
				))}
			</S.Gallery>
		)
	}
}

export default Gallery
