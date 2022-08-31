import styled from 'styled-components'

interface BoxColorContainerProps {
	active: boolean
	bgColor: string
}

export const BoxColorContainer = styled.div<BoxColorContainerProps>`
	position: absolute;
	right: 50%;
	bottom: 50%;
	transform: translate(50%, 50%);

	background: ${({ bgColor }) => bgColor};

	height: 32px;
	width: 32px;

	cursor: pointer;
`

export const WrapperBoxColor = styled.div<{ active: boolean }>`
	position: relative;
	border: ${({ active, theme }) => active && `1px solid ${theme.palette.main}`};
	height: 36px;
	width: 36px;
	&:hover {
		border: ${({ theme }) => `1px solid ${theme.palette.main}`};
	}
`
