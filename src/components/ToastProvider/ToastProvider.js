import React from "react"

export const ToastContext = React.createContext()
import useKeydown from "../../hooks/useKeydown"

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

	useKeydown("Escape", () => setToasts([]))

	return <ToastContext.Provider value={{ toasts, createToast, handleDismissClick }}>{children}</ToastContext.Provider>
}

export default ToastProvider
