import { Product, Products } from 'pages'
import { CategoryProps } from 'queries/GET_CATEGORIES'
import { PureComponent } from 'react'
import { Route, Routes } from 'react-router-dom'

interface PageProps {
	routes: CategoryProps[]
}

export class Page extends PureComponent<PageProps> {
	render() {
		return (
			<Routes>
				<Route path='/' element={<Products />} />
				{this.props.routes.map((category) => (
					<>
						<Route path={`/${category.name || '/'}`} element={<Products />} />
						<Route path={`/products/:id`} element={<Product />} />
					</>
				))}
				<Route path='*' element='Not found' /> {/* TODO: Not found page */}
			</Routes>
		)
	}
}

export default Page
