import React from "react"
export default function useKeydown(key, callback) {
	function handleEscape(event) {
		if (event.code !== key) return

		callback(event)
	}

	React.useEffect(() => {
		window.addEventListener("keydown", handleEscape)

		return () => window.removeEventListener("keydown", handleEscape)
	}, [callback])
}
