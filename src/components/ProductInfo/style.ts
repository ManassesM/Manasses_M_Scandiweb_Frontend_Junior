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

export const HtmlParser = styled(Scrollbar)`
	margin-top: 40px;

	font-weight: ${({ theme }) => theme.typography.fontWeigth.regular};
	font-size: 16px;
	line-height: 160%;
	height: 178px;

	display: flex;
	flex-direction: column;
	gap: 15px;

	overflow-x: hidden;
	overflow-y: auto;
`

export const PriceText = styled.div`
	font-family: ${({ theme }) => theme.typography.fontFamily.raleway};
	font-weight: ${({ theme }) => theme.typography.fontWeigth.bold};
	font-size: 24px;
	margin-top: 10px;
`

export const WrapperAttributes = styled.section`
	margin: 40px 0;
	> p {
		font-family: ${({ theme }) => theme.typography.fontFamily.roboto};
		font-weight: ${({ theme }) => theme.typography.fontWeigth.bold};
		font-size: 18px;
		text-transform: uppercase;
	}
`

export const InfoText = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
	font-size: 30px;

	strong {
		font-weight: ${({ theme }) => theme.typography.fontWeigth.semibold};
	}
`

export const ProductInfoContainer = styled.div`
	max-width: 292px;
	padding: 5px 0;
`
