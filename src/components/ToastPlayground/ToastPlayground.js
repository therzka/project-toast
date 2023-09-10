import React from 'react';

import Button from '../Button';

import Toast from "../Toast"
import styles from "./ToastPlayground.module.css"
import ToastShelf from "../ToastShelf/ToastShelf"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
	const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
	const [message, setMessage] = React.useState("")
	const [toasts, setToasts] = React.useState([])

	function generateToast(event) {
		event.preventDefault()

		setToasts((currentToasts) => {
			const newToast = { variant: variant, message: message, id: crypto.randomUUID() }
			return [...currentToasts, newToast]
		})

		setMessage("")
	}

	return (
		<div className={styles.wrapper}>
			<header>
				<img alt='Cute toast mascot' src='/toast.png' />
				<h1>Toast Playground</h1>
			</header>

			{toasts && <ToastShelf toasts={toasts} setToasts={setToasts} />}

			<form className={styles.controlsWrapper} onSubmit={(event) => generateToast(event)}>
				<div className={styles.row}>
					<label htmlFor='message' className={styles.label} style={{ alignSelf: "baseline" }}>
						Message
					</label>
					<div className={styles.inputWrapper}>
						<textarea
							id='message'
							className={styles.messageInput}
							value={message}
							onChange={(event) => setMessage(event.target.value)}
						/>
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label}>Variant</div>
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						{VARIANT_OPTIONS.map((option) => (
							<label htmlFor={`variant-${option}`}>
								<input
									id={`variant-${option}`}
									key={option}
									type='radio'
									name='variant'
									checked={variant === option}
									value={option}
									onChange={(event) => setVariant(event.target.value)}
								/>
								{option}
							</label>
						))}
					</div>
				</div>

				<div className={styles.row}>
					<div className={styles.label} />
					<div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
						<Button>Pop Toast!</Button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ToastPlayground;
