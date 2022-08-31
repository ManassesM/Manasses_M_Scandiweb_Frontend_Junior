import ApolloClient from 'apollo-boost'
import { theme } from 'config/theme'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from 'redux/store'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'styles/global'
import App from './App'
import './styles/global.ts'

export const client = new ApolloClient({
	uri: 'http://localhost:4000',
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<GlobalStyle />
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</BrowserRouter>
		</ApolloProvider>
	</Provider>
)
