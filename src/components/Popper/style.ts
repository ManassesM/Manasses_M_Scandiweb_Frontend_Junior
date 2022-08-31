import styled from 'styled-components'

interface PopperContainerProps {
	width: number
	height: number
}

export const PopperContainer = styled.div<PopperContainerProps>`
	position: absolute;
	right: 95px;

	display: flex;

	flex-direction: column;
	justify-content: center;

	width: ${(props) => `${props.width}px`};
	height: ${(props) => `${props.height}px`};
	box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);

	background: #ffffff;

  overflow-y: auto;
`

export const PopperBackground = styled.div`
	position: absolute;

	height: calc(100% - 80px);
	width: 100%;

	bottom: 0;
	right: 0;
`
