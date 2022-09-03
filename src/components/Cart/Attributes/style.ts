import styled from 'styled-components'

export const WrapperAttributes = styled.section`
	margin-top: 40px;

	> p {
		font-family: ${({ theme }) => theme.typography.fontFamily.roboto};
		font-weight: ${({ theme }) => theme.typography.fontWeigth.bold};
		font-size: 18px;
		text-transform: uppercase;
	}
`
