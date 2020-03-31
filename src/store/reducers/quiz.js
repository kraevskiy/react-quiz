import {FETCH_QUIZ_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "../actions/actionTypes";

const initialState = {
	quizes: [],
	error: null,
	loading: true,
	results: {},
	isFinished: false,
	activeQuestion: 0,
	answerState: null,
	quiz: null,
}

export default function quizReducer(state = initialState, action)  {
	const {type, payload} = action

	switch (type) {
		case FETCH_QUIZES_START:
			return {
				...state, loading: true
			}
		case FETCH_QUIZES_SUCCESS:
			return {
				...state, loading: false, quizes: payload
			}
		case FETCH_QUIZES_ERROR:
			return {
				...state, loading: false, error: payload
			}
		case FETCH_QUIZ_SUCCESS:
			return {
				...state, loading: false, quiz: payload
			}
		default:
			return state
	}
}