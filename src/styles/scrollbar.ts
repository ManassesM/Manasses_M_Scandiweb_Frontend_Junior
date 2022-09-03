import styled from 'styled-components'

export const Scrollbar = styled.div`
	::-webkit-scrollbar {
		width: 4px;
	}
	::-webkit-scrollbar-track {
		background: ${({ theme }) => theme.palette.white};
	}
	::-webkit-scrollbar-thumb {
		border-radius: 6px;
		border: 3px solid #f1f1f1;
	}
`
