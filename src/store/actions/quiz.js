import axios from '../../axios/axios-quiz'
import {FETCH_QUIZ_SUCCESS,
	FETCH_QUIZES_ERROR,
	FETCH_QUIZES_START,
	FETCH_QUIZES_SUCCESS} from "./actionTypes";

export function fetchQuizes() {
	return async dispatch => {
		dispatch(fetchQuizesStart())
		try {
			const response = await axios.get('https://react-quiz-be87d.firebaseio.com/quizes.json')
			const quizes = []

			Object.keys(response.data).forEach((key, index) => {
				quizes.push({
					id: key,
					name: `Test #${index}`
				})
			})
			dispatch(fetchQuizesSuccess(quizes))
		} catch (e) {
			console.log(e);
			dispatch(fetchQuizesError(e))
		}
	}
}

export function fetchQuizById(quizId) {
	return async dispatch => {
		dispatch(fetchQuizesStart())
		try {
			const response = await axios.get(`/quizes/${quizId}.json`)
			const quiz = response.data
			dispatch(fetchQuizSucces(quiz))
		} catch (e) {
			dispatch(fetchQuizesError(e))
		}
	}
}

export function fetchQuizSucces(quiz) {
	return {
		type: FETCH_QUIZ_SUCCESS,
		payload: quiz
	}
}

export function fetchQuizesStart() {
	return{
		type: FETCH_QUIZES_START,
	}
}

export function fetchQuizesSuccess(quizes){
	return{
		type: FETCH_QUIZES_SUCCESS,
		payload: quizes
	}
}

export function fetchQuizesError(e){
	return{
		type: FETCH_QUIZES_ERROR,
		payload: e
	}
}