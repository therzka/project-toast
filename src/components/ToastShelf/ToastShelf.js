import React from 'react';

import Toast from '../Toast';
import { ToastContext } from "../ToastProvider/ToastProvider"
import styles from "./ToastShelf.module.css"

function ToastShelf() {
	const toastState = React.useContext(ToastContext)
	const toasts = toastState.toasts || []
	const handleDismissClick = toastState.handleDismissClick

	return (
		<ol className={styles.wrapper}>
			{toasts.map((toast) => {
				return (
					<li key={toast.id}>
						<Toast
							variant={toast.variant}
							message={toast.message}
							handleDismissClick={() => handleDismissClick(toast.id)}
							key={toast.id}
						/>
					</li>
				)
			})}
		</ol>
	)
}

export default React.memo(ToastShelf)
