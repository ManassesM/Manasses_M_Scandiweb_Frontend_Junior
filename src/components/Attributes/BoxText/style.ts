import styled from 'styled-components'

interface BoxTextContainerProps {
	active: boolean
	isMinicart: boolean
}

export const BoxTextContainer = styled.div<BoxTextContainerProps>`
	border: ${({ theme }) => `1px solid ${theme.palette.black}`};
	background: ${({ active, theme }) => active && theme.palette.black};
	color: ${({ active, theme }) => active && theme.palette.white};
	font-size: ${({ isMinicart }) => (isMinicart ? '14px' : '16px')};

	display: flex;
	align-items: center;
	justify-content: center;

	height: ${({ isMinicart }) => (isMinicart ? '24px' : '45px')};
	width: auto;

	cursor: pointer;

	transition: all 0.1s ease-in-out;
	&:hover {
		background: ${({ theme }) => theme.palette.black};
		color: ${({ theme }) => theme.palette.white};
	}

	p {
		font-family: ${({ theme }) => theme.typography.fontFamily.SourceSansPro};
		padding: 0 22px;
	}
`
