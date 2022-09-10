import styled from 'styled-components'

interface BoxColorContainerProps {
	active: boolean
	bgColor: string
	isMinicart?: boolean
	isHover: boolean
}

interface WrapperBoxColorProps {
	active: boolean
	isMinicart?: boolean
	isHover: boolean
}

export const BoxColorContainer = styled.div<BoxColorContainerProps>`
	position: absolute;
	right: 50%;
	bottom: 50%;
	transform: translate(50%, 50%);

	background: ${({ bgColor }) => bgColor};

	height: ${({ isMinicart }) => (isMinicart ? '16px' : '32px')};
	width: ${({ isMinicart }) => (isMinicart ? '16px' : '32px')};

	cursor: ${({ isHover }) => isHover && 'pointer'};
`

export const WrapperBoxColor = styled.div<WrapperBoxColorProps>`
	position: relative;
	border: ${({ active, theme }) => active && `1px solid ${theme.palette.main}`};

	height: ${({ isMinicart }) => (isMinicart ? '20px' : '36px')};
	width: ${({ isMinicart }) => (isMinicart ? '20px' : '36px')};

	&:hover {
		border: ${({ isHover, theme }) =>
			isHover && `1px solid ${theme.palette.main}`};
	}
`
