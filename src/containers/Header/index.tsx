import logo from 'assets/icons/logo.svg'
import Navigation from 'components/Navigation'
import Actions from 'containers/Actions'
import { PureComponent } from 'react'

import * as S from './style'

export class Header extends PureComponent {
	render() {
		return (
			<S.WrapperHeader>
				<S.HeaderContainer>
					<Navigation />
					<S.Logo
						src={logo}
						width={41}
						height={41}
						alt='Store Logo'
						cursor='default'
					/>
					<Actions />
				</S.HeaderContainer>
			</S.WrapperHeader>
		)
	}
}

export default Header
