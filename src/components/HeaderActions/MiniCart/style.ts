import { Image } from 'components/Image'
import styled from 'styled-components'

export const CartAmount = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;

	font-family: ${({ theme }) => theme.typography.fontFamily.roboto};
	font-weight: ${({ theme }) => theme.typography.fontWeigth.bold};
	color: ${({ theme }) => theme.palette.white};
	font-size: 14px;

	border-radius: 50%;
	width: 20px;
	height: 20px;

	top: -50%;
	right: -50%;
	background: ${({ theme }) => theme.palette.black};
`

export const MiniCart = styled(Image)<{ content?: number }>`
	z-index: 2;
`

export const MiniCartContainer = styled.div`
	position: relative;

	display: flex;
	width: 20px;
	height: 20px;
`
