import Header from 'containers/Header'
import Routes from 'containers/Routes'
import { PureComponent } from 'react'

class App extends PureComponent {
	render() {
		return (
			<>
				<Header />
				<Routes />
			</>
		)
	}
}

export default App
