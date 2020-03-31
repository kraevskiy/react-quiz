import React, {Component} from 'react';
import classes from './QuizList.module.css'
import {NavLink} from 'react-router-dom'
import axios from 'axios'

class QuizList extends Component {

	state = {
		quizes: []
	}

	renderQuizes(){
		return this.state.quizes.map(quiz=>{
			return(
				<li
					key={quiz.id}>
					<NavLink to={'/quiz/' + quiz.id}>
						{quiz.name}
					</NavLink>
				</li>
			)
		})
	}

	async componentDidMount() {
		try {
			const response = await axios.get('https://react-quiz-be87d.firebaseio.com/quizes.json')
			console.log(response.data);
			const quizes = []

			Object.keys(response.data).forEach((key, index)=>{
				quizes.push({
					id: key,
					name: `Test #${index}`
				})
			})

			this.setState({
				quizes
			})
		} catch (e) {
			console.log(e);
		}
	}

	render() {
		return (
			<div className={classes.QuizList}>
				<div>
					<h1>Список тестов</h1>
					<ul>
						{this.renderQuizes()}
					</ul>
				</div>
			</div>
		);
	}
}

export default QuizList;