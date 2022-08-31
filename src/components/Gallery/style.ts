import styled from 'styled-components'

const Scrollbar = styled.div`
	::-webkit-scrollbar {
		width: 4px;
	}
	::-webkit-scrollbar-track {
		background: #ffffff;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 6px;
		border: 3px solid #f1f1f1;
	}
`

export const Gallery = styled(Scrollbar)`
	> div:not(:last-child) {
		margin-bottom: 40px;

		&:hover {
			border: 1px solid #f1f1f1;
		}
	}

	max-height: 595px;
	overflow-y: auto;
`
