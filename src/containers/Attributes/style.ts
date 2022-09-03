import styled from 'styled-components'

export const WrapperAttributes = styled.section<{ isMinicart?: boolean }>`
	margin: 40px 0;

	> p {
		font-family: ${({ theme }) => theme.typography.fontFamily.roboto};

		font-weight: ${({ isMinicart, theme }) =>
			`${
				isMinicart
					? theme.typography.fontWeigth.regular
					: theme.typography.fontWeigth.bold
			}`};

		font-size: ${({ isMinicart }) => `${isMinicart ? '14' : '18'}px`};
		text-transform: uppercase;
	}

	> div {
		margin-top: 8px;
		display: flex;
		gap: 12px;
	}
`
