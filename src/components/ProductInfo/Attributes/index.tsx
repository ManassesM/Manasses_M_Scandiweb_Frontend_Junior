import Items from 'components/Cart/Attributes/Items'
import { AttributeProps as IAttribute } from 'queries/GET_PRODUCT_BY_ID'
import { PureComponent } from 'react'
import { connect } from 'react-redux'
import {
	DefaultProps,
	DefaultPropsObject,
	updateDefaultProps,
} from 'redux/features/defaultPropsSlice'
import { AppDispatch, RootState } from 'redux/store'
import { configDefaultProps } from 'utils/DefaultProps'

import * as S from './style'

interface AttributesProps {
	attributes: IAttribute[]
	defaultProps: DefaultProps
	changeDefaultProps: (data: DefaultProps) => void
}

export class Attributes extends PureComponent<AttributesProps> {
	render() {
		let defaultProps = this.props.defaultProps.data || []

		const onClick = (data: DefaultPropsObject) => {
			defaultProps = configDefaultProps({
				prevProps: this.props.defaultProps.data || [],
				props: data,
			})

			this.props.changeDefaultProps({ data: defaultProps })
		}

		return (
			<>
				{this.props.attributes?.map((attribute) => (
					<S.WrapperAttributes key={attribute.id}>
						<p>{attribute.name}</p>
						<Items
							id={attribute.id}
							type={attribute.type}
							items={attribute.items}
							onClick={onClick}
							defaultAttributes={defaultProps}
						/>
					</S.WrapperAttributes>
				))}
			</>
		)
	}
}

const mapStateToProps = (state: RootState) => ({
	defaultProps: state.defaultProps,
})

const mapDispatchToProps = (dispatch: AppDispatch) => {
	return {
		changeDefaultProps: (defaultProps: DefaultProps) => {
			dispatch(updateDefaultProps(defaultProps))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Attributes)
