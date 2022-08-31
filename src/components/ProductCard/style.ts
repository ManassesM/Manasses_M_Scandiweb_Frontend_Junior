import { Image } from 'components/Image'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Outofstock = styled(Image)`
  position: absolute;
`

export const ProductContent = styled.div`
	height: 58px;

	display: flex;
	flex-direction: column;
	font-size: 18px;
	line-height: 160%;

	span {
		font-weight: ${({ theme }) => theme.typography.fontWeigth.light};
	}

	strong {
		font-weight: ${({ theme }) => theme.typography.fontWeigth.medium};
	}
`

export const ProductCardContainer = styled(Link)`
	position: relative;

	display: flex;
	flex-direction: column;
	gap: 24px;

	height: 444px;
	width: 386px;
	padding: 16px;

	transition: all 0.2s ease;
	&:hover {
		box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
		cursor: pointer;

		section {
			opacity: 1;
		}
	}
`
