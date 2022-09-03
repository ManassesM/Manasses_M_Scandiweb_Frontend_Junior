import styled from 'styled-components'

export const Box = styled.div<{ isMinicart?: boolean }>`
	width: ${({ isMinicart }) => (isMinicart ? '24px' : '45px')};
	height: ${({ isMinicart }) => (isMinicart ? '24px' : '45px')};

	border: ${({ theme }) => `1px solid ${theme.palette.black}`};

	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`

export const ProductAmount = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	p {
		font-weight: ${({ theme }) => theme.typography.fontWeigth.medium};
	}
`
