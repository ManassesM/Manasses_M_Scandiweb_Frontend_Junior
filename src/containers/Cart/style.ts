import styled from 'styled-components'

export const InfoText = styled.div`
	display: grid;
	grid-template-columns: 110px auto;
	justify-self: start;
	font-size: 24px;
`

export const CartTotal = styled.div`
	display: flex;
	flex-direction: column;
	gap: 18px;

	border-top: 1px solid #e5e5e5;
	padding: 24px 0;
`

export const CartItems = styled.div`
	display: flex;
	flex-direction: column;
`

export const CartContainer = styled.div`
	> p {
		font-size: 32px;
		font-weight: ${({ theme }) => theme.typography.fontWeigth.bold};
		margin-bottom: 50px;
	}
`
