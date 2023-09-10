import React from "react"

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
	const [toasts, setToasts] = React.useState([])

	function createToast(variant, message) {
		setToasts((currentToasts) => {
			const newToast = { variant: variant, message: message, id: crypto.randomUUID() }
			return [...currentToasts, newToast]
		})
	}

	function handleDismissClick(id) {
		setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
	}

	return <ToastContext.Provider value={{ toasts, createToast, handleDismissClick }}>{children}</ToastContext.Provider>
}

export default ToastProvider
