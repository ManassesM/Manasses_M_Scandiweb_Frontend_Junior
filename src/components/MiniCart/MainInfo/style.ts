import styled from 'styled-components'

export const PriceText = styled.div`
	font-weight: ${({ theme }) => theme.typography.fontWeigth.medium};

	margin: 15px 0;
`

export const InfoText = styled.div`
	display: flex;
	flex-direction: column;

	font-weight: ${({ theme }) => theme.typography.fontWeigth.light};
`
