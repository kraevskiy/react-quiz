import React from 'react';
import classes from './FinishedQuiz.module.css'
const FinishQuiz = props => (
	<div className={classes.FinishedQuiz}>
		<ul>
			<li>
				<strong>1. </strong>
				Какака
				<i className={'fa fa-times ' + classes.error}></i>
			</li>
			<li>
				<strong>1. </strong>
				Какака
				<i className={'fa fa-check ' + classes.success}></i>
			</li>
		</ul>
		<p>Правильно 4 из 10</p>
		<div>
			<button>Поаторить</button>
		</div>
	</div>
)

export default FinishQuiz;