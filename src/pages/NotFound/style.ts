import styled from 'styled-components'

export const ContainerNotFound = styled.div`
	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
	height: 60vh;

	h3 {
		color: #5ece7b;
		font-weight: 700;
		padding: 2em;
	}

	img {
		transform: rotate(-25deg);
	}

	a {
		display: flex;
		flex-direction: column;
		gap: 2rem;

		span {
			transition: color 0.1s ease-in-out;
			&:hover {
				color: #5ece7b;
			}
		}
	}
`
