import React from 'react';
import classe from './Button.module.css'
const Button = props => {
	const cls = [
		classe.Button,
		classe[props.type]
	]

	return(
		<button
			onClick={props.onClick}
			className={cls.join(' ')}
			disabled={props.disabled}>
			{props.children}
		</button>
	)
}

export default Button;