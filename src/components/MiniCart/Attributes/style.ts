import styled from 'styled-components'

export const WrapperAttributes = styled.section<{ isMinicart?: boolean }>`
	margin-top: ${({ isMinicart }) => `${isMinicart ? '8' : '40'}px`};

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
`
