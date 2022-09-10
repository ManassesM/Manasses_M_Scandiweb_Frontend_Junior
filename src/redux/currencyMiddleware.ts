import { setToLocalStorage } from 'utils/LocalStorage'

export const currencyMiddleware = () => (next: any) => (action: any) => {
	if (action?.type.includes('changeCurrency')) {
		setToLocalStorage('currency', action?.payload)
	}

	return next(action)
}
