import styled from 'styled-components'
import { Scrollbar } from 'styles/scrollbar'

export const Buttons = styled.div`
	display: flex;
	gap: 12px;
`

export const Total = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	> p {
		font-family: ${({ theme }) => theme.typography.fontFamily.roboto};
		font-weight: ${({ theme }) => theme.typography.fontWeigth.medium};
	}
`

export const WrapperMiniCart = styled(Scrollbar)`
	display: flex;
	flex-direction: column;
	gap: 40px;
  overflow-x: hidden;
	overflow-y: auto;
	max-height: 420px;
`

export const MiniCartContainer = styled.div`
	height: 100%;
	padding: 32px 16px;
	display: flex;
	flex-direction: column;
	gap: 32px;
	border: 1px solid red;
`
