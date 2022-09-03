import { LoadingSpinner } from 'components/LoadingSpinner'
import { GET_CATEGORIES, QRCategories } from 'queries/GET_CATEGORIES'
import { PureComponent } from 'react'
import { Query, QueryResult } from 'react-apollo'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { changeCategory } from 'redux/features/categorySlice'
import { AppDispatch } from 'redux/store'
import { NavLinkStyles } from 'utils/NavLinkStyles'

import * as S from './style'

interface NavigationProps {
	onChangeCategory: (category: string) => void
}

export class Navigation extends PureComponent<NavigationProps> {
	render() {
		const handleCategory = (category: string) => {
			this.props.onChangeCategory(category)
		}

		return (
			<Query query={GET_CATEGORIES}>
				{({ data, loading }: QueryResult<QRCategories>) => {
					if (loading) return <LoadingSpinner />

					return (
						<S.NavigationContainer>
							{data?.categories?.map(({ name }) => (
								<NavLink
									key={name}
									to={name === 'all' ? '/' : name}
									style={NavLinkStyles}
									onClick={() => handleCategory(name)}
								>
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

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		onChangeCategory: (category: string) => {
			dispatch(changeCategory({ name: category }))
		},
	}
}

export default connect(null, mapDispatchToProps)(Navigation)
