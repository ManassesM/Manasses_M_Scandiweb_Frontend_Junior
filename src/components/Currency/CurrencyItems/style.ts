import styled from 'styled-components'

export const CurrencyItem = styled.div<{ active: boolean }>`
	display: flex;
	background: ${({ active, theme }) => `${active && theme.palette.whiteHover}`};

	span {
		margin: 12px auto 8px 20px;
		font-size: 18px;
		font-weight: ${({ theme }) => theme.typography.fontWeigth.medium};
	}

	&:hover {
		background-color: #eeeeee;
		cursor: pointer;
	}
`
