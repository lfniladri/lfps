'use client'

const setItem = (key: string, value: string) => {
	localStorage.setItem(key, value)
}

const getItem = (key: string): string => {
	if (typeof window !== 'undefined') {
		return localStorage.getItem(key) || ''
	}
	return ''
}


const removeItem = (key: string) => {
	localStorage.removeItem(key)
}

const clear = () => {
	localStorage.clear()
}

const LocalStorageService = Object.freeze({
	setItem,
	getItem,
	removeItem,
	clear,
})

export default LocalStorageService
