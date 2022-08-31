import styled from 'styled-components'

interface ModalContainerProps {
	width: number
	height: number
}

export const ModalContainer = styled.div<ModalContainerProps>`
	position: absolute;
	right: 95px;

	display: flex;
	flex-direction: column;
	justify-content: center;

	width: ${(props) => `${props.width}px`};
	height: ${(props) => `${props.height}px`};

	background: ${({ theme }) => theme.palette.white};
	z-index: 100;
`

export const ModalBackground = styled.div`
	background: rgba(0, 0, 0, 0.22);
	position: fixed;
	top: 80px;
	height: 100%;

	width: 100%;

	bottom: 0;
	right: 0;
	z-index: 99;
`
