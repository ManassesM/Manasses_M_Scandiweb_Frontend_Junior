import styled from 'styled-components'

interface BoxTextContainerProps {
	active: boolean
	isMinicart: boolean
	isHover: boolean
}

export const BoxTextContainer = styled.div<BoxTextContainerProps>`
	border: ${({ theme }) => `1px solid ${theme.palette.black}`};
	background: ${({ active, theme }) => active && theme.palette.black};
	color: ${({ active, theme }) => active && theme.palette.white};
	font-size: ${({ isMinicart }) => (isMinicart ? '14px' : '16px')};

	display: flex;
	align-items: center;
	justify-content: center;

	height: ${({ isMinicart }) => `${isMinicart ? '2em' : '2.5em'}`};

	transition: all 0.1s ease-in-out;
	&:hover {
		cursor: ${({ isHover }) => isHover && 'pointer'};
		background: ${({ isHover, theme }) => isHover && theme.palette.black};
		color: ${({ isHover, theme }) => isHover && theme.palette.white};
	}

	p {
		font-family: ${({ theme }) => theme.typography.fontFamily.SourceSansPro};
		padding: ${({ isMinicart }) => (isMinicart ? '0.7em' : '1.5em')};
	}
`
