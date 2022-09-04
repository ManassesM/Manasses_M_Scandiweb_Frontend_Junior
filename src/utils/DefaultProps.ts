import { DefaultPropsObject } from 'redux/features/defaultPropsSlice'

interface ConfigDefaultPropsObject {
	prevProps: DefaultPropsObject[]
	props: DefaultPropsObject
}

export function configDefaultProps({
	prevProps,
	props,
}: ConfigDefaultPropsObject): any {
	if (prevProps?.find(({ id }) => id === props.id)) return prevProps
	return [...prevProps, props]
}
