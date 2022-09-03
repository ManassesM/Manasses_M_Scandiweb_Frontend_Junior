import styled from 'styled-components'
import { Scrollbar } from 'styles/scrollbar'

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
