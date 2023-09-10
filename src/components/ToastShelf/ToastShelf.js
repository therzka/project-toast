import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, setToasts }) {
	function handleDismissClick(id) {
		setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id))
	}

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
