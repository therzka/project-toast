import React from 'react';

import Toast from '../Toast';
import { ToastContext } from "../ToastProvider/ToastProvider"
import styles from "./ToastShelf.module.css"

function ToastShelf() {
	const { toasts, handleDismissClick } = React.useContext(ToastContext)

	return (
		<ol className={styles.wrapper} role='region' aria-live='polite' aria-label='Notification'>
			{toasts.map((toast) => {
				return (
					<li key={toast.id}>
						<Toast
							variant={toast.variant}
							message={toast.message}
							handleDismissClick={() => handleDismissClick(toast.id)}
						/>
					</li>
				)
			})}
		</ol>
	)
}

export default React.memo(ToastShelf)
