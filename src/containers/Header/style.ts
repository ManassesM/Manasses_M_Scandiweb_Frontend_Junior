import { Image } from 'components/Image'
import styled from 'styled-components'

export const Logo = styled(Image)`
	position: absolute;
	right: 50%;
	transform: translateX(50%);
`

export const HeaderContainer = styled.div`
	position: relative;
	padding: 24px 101px 0 101px;
	display: flex;
	justify-content: space-between;
	height: 80px;
	color: ${({ theme }) => theme.main};
`

export const WrapperHeader = styled.div`
	position: fixed;
	width: 100%;
	background: ${({ theme }) => theme.palette.white};
	top: 0;
`
