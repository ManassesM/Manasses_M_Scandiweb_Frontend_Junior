import { PureComponent, ReactNode } from 'react'

import * as S from './style'

interface PopperProps {
	children: ReactNode
	width?: number
	height?: number
	close: boolean
	onClose: () => void
}

export class Popper extends PureComponent<PopperProps> {
	render() {
		if (!this.props.close) return null
		return (
			<S.PopperBackground onClick={this.props.onClose}>
				<S.PopperContainer
					onClick={(e) => e.stopPropagation()}
					width={this.props.width || 114}
					height={this.props.height || 200}
				>
					{this.props.children}
				</S.PopperContainer>
			</S.PopperBackground>
		)
	}
}
