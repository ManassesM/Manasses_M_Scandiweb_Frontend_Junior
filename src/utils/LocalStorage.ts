export function getFromLocalStorage(itemName: string): any | undefined {
	const localItem = localStorage.getItem(itemName)
	if (!localItem) return
	return JSON.parse(localItem)
}

export function setToLocalStorage(itemName: string, item: any) {
	localStorage.setItem(itemName, JSON.stringify(item))
}
