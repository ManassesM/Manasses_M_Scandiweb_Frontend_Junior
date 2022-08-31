import { theme } from 'config/theme'
import { PureComponent } from 'react'

import * as S from './style'

interface ButtonProps {
	text: string
	bgColor?: string
	txtColor?: string
	contained?: boolean
	width?: number
	height?: number
	onClick?: () => void
	disabled?: boolean
}

export class Button extends PureComponent<ButtonProps> {
	render() {
		return (
			<S.ButtonStyle
				width={this.props.width || 100}
				height={this.props.height || 50}
				bgColor={this.props.bgColor || theme.palette.white}
				txtColor={this.props.txtColor || theme.palette.black}
				contained={this.props.contained || false}
				onClick={this.props.onClick}
				disabled={this.props.disabled || false}
			>
				{this.props.text}
			</S.ButtonStyle>
		)
	}
}
