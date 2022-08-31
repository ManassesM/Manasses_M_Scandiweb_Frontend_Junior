import styled from 'styled-components'

export const WrapperAttributes = styled.section`
	margin: 40px 0;

	> p {
		font-family: ${({ theme }) => theme.typography.fontFamily.roboto};
		font-weight: ${({ theme }) => theme.typography.fontWeigth.bold};
		font-size: 18px;
		text-transform: uppercase;
	}

	> div {
    margin-top: 8px;
		display: flex;
		gap: 12px;
	}
`

export const AttributesContainer = styled.div``
