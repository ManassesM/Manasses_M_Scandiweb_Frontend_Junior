import { LoadingSpinner } from 'components/LoadingSpinner'
import { GET_CATEGORIES, QRCategories } from 'queries/GET_CATEGORIES'
import { PureComponent } from 'react'
import { Query, QueryResult } from 'react-apollo'
import Page from './Page'

class Routes extends PureComponent {
	render() {
		return (
			<Query query={GET_CATEGORIES}>
				{({ data, loading }: QueryResult<QRCategories>) => {
					if (loading) return <LoadingSpinner />
					return <Page routes={data?.categories || []} />
				}}
			</Query>
		)
	}
}

export default Routes
