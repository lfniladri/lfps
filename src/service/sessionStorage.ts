'use client'

//https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

const setItem = (key: string, value: string) => {
	sessionStorage.setItem(key, value)
}

const getItem = (key: string): string => {
	return sessionStorage.getItem(key) || ''
}

const removeItem = (key: string) => {
	sessionStorage.removeItem(key)
}

const clear = () => {
	sessionStorage.clear()
}

const SessionStorageService = Object.freeze({
	setItem,
	getItem,
	removeItem,
	clear,
})

export default SessionStorageService
