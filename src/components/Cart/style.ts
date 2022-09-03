import styled from 'styled-components'

export const Box = styled.div`
	width: 45px;
	height: 45px;

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
		font-size: 24px;
		font-weight: ${({ theme }) => theme.typography.fontWeigth.medium};
	}
`

export const MainInfoContainer = styled.div`
	display: flex;
	justify-content: space-between;
`

export const CartContainer = styled.section`
	border-top: 1px solid #e5e5e5;
	min-height: 288px;
	padding: 24px 0;

	display: grid;
	grid-template-columns: auto 200px;
	grid-column-gap: 24px;
`
