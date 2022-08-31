import { PureComponent, ReactNode } from 'react'

import * as S from './style'

interface ModalProps {
	children: ReactNode
	width?: number
	height?: number
	close: boolean
	onClose: () => void
}

export class Modal extends PureComponent<ModalProps> {
	render() {
		if (!this.props.close) return null
		return (
			<S.ModalBackground onClick={this.props.onClose}>
				<S.ModalContainer
					onClick={(e) => e.stopPropagation()}
					width={this.props.width || 100}
					height={this.props.height || 100}
				>
					{this.props.children}
				</S.ModalContainer>
			</S.ModalBackground>
		)
	}
}

export default Modal
