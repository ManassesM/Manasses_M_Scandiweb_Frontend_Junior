export function getFromLocalStorage<T>(itemName: string, defaultProps?: T): T {
	const localItem = localStorage.getItem(itemName)

	if (!localItem && defaultProps) {
		setToLocalStorage(itemName, defaultProps)
		return defaultProps
	}

	return localItem && JSON.parse(localItem)
}

export function setToLocalStorage(itemName: string, item: any) {
	localStorage.setItem(itemName, JSON.stringify(item))
}
