import { setToLocalStorage } from 'utils/LocalStorage'
import { toggleCartModal } from './features/cartModalSlice'
import { toggleCurrencyModal } from './features/currencyModalSlice'

export const middleware = (store: any) => (next: any) => (action: any) => {
	if (action?.type.includes('changeCurrency')) {
		setToLocalStorage('currency', action?.payload)
	}

	if (action?.type.includes('changeCategory')) {
		const { cartModal, currencyModal } = store.getState()
		if (cartModal.open) store.dispatch(toggleCartModal())
		if (currencyModal.open) store.dispatch(toggleCurrencyModal())
	}

	return next(action)
}
