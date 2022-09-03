import styled from 'styled-components'

export const PriceText = styled.div`
	font-family: ${({ theme }) => theme.typography.fontFamily.raleway};
	font-weight: ${({ theme }) => theme.typography.fontWeigth.bold};
	font-size: 24px;

	margin: 30px 0;
`

export const InfoText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
	font-size: 30px;

	strong {
		font-weight: ${({ theme }) => theme.typography.fontWeigth.semibold};
	}
`
