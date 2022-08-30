import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './global.css'

export const client = new ApolloClient({
	uri: 'http://localhost:4000',
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<ApolloProvider client={client}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ApolloProvider>
)
