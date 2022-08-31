import styled from 'styled-components'


export const CurrencyContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	p {
		padding: 0 10px;
		font-size: 18px;
		font-weight: ${({ theme }) => theme.typography.fontWeigth.medium};
	}
`
