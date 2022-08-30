import { PureComponent } from 'react'
import styled from 'styled-components'

export const Spin = styled.div`
	display: inline-block;
	width: 25px;
	height: 25px;
	border: 3px solid rgba(184, 184, 184, 0.3);
	border-radius: 50%;
	border-top-color: #5ece7b;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;

	align-self: center;
	justify-self: center;

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`

export class LoadingSpinner extends PureComponent<{}> {
	render() {
		return <Spin />
	}
}
