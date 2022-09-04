import { Cart, NotFound, Product, Products } from 'pages'

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
					<Route
						key={category.name}
						path={`/${category.name || '/'}`}
						element={<Products />}
					/>
				))}
				<Route path={`/products/:id`} element={<Product />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		)
	}
}

export default Page
