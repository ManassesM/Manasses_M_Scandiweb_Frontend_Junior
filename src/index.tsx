import ApolloClient from 'apollo-boost'
import { theme } from 'config/theme'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import App from './App'
import './styles/global.ts'

export const client = new ApolloClient({
	uri: 'http://localhost:4000',
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</BrowserRouter>
	</ApolloProvider>
)
