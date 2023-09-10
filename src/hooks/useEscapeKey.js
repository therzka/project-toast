export default function useEscapeKey(callback) {
	function handleEscape(event) {
		if (event.code !== "Escape") return

		callback()
	}

	window.addEventListener("keydown", handleEscape)

	return () => window.removeEventListener("keydown", handleEscape)
}
