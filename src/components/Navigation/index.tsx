import { LoadingSpinner } from 'components/LoadingSpinner'
import { GET_CATEGORIES, QRCategories } from 'queries/GET_CATEGORIES'
import { PureComponent } from 'react'
import { Query, QueryResult } from 'react-apollo'
import { NavLink } from 'react-router-dom'
import { NavLinkStyles } from 'utils/NavLinkStyles'

import * as S from './style'

export class Navigation extends PureComponent {
	render() {
		return (
			<Query query={GET_CATEGORIES}>
				{({ data, loading }: QueryResult<QRCategories>) => {
					if (loading) return <LoadingSpinner />

					return (
						<S.NavigationContainer>
							{data?.categories.map(({ name }) => (
								<NavLink to={name === 'all' ? '/' : name} style={NavLinkStyles}>
									{name}
								</NavLink>
							))}
						</S.NavigationContainer>
					)
				}}
			</Query>
		)
	}
}

export default Navigation
