import styled from 'styled-components'

export const MiniCartButtonContainer = styled.section`
	opacity: 0;
	position: absolute;
	right: 31px;
	bottom: 72px;

	width: 52px;
	height: 52px;

	background: ${({ theme }) => theme.palette.main};
	border-radius: 50%;

	display: flex;
	align-items: center;
	justify-content: center;

	transition: all 0.1s ease;
	&:hover {
		transform: scale(1.05);
	}
`
