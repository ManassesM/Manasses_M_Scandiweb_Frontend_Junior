import styled from 'styled-components'

export const WrapperAttributes = styled.section`
	margin-top: 8px;

	> p {
		font-weight: ${({ theme }) => theme.typography.fontWeigth.regular};
		font-size: 14px;
	}
`
