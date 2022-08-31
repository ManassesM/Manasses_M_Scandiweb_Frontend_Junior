import { CategoryProps } from 'queries/GET_CATEGORIES'
import { PureComponent, ReactNode } from 'react'
import { connect } from 'react-redux'
import { RootState } from 'redux/store'

import * as S from './style'

interface PageContainerProps {
	hasTitle?: boolean
	children: ReactNode
	category: CategoryProps
}

export class PageContainer extends PureComponent<PageContainerProps> {
	render() {
		return (
			<S.Container>
				{this.props.hasTitle ? <p>{this.props.category?.name || ''}</p> : null}
				{this.props.children}
			</S.Container>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	category: state.category,
})

export default connect(mapStateToProps)(PageContainer)
