import { theme } from 'config/theme'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	html,
	body {
		font-family: ${theme.typography.fontFamily.raleway};
		color: ${theme.palette.black};
		background: ${theme.palette.white};
		line-height: ${theme.typography.lineHeight};
		height: 100%;
	}

	a {
		color: ${theme.palette.black};
		text-decoration: none;
	}

	button {
		cursor: pointer;
	}
`
