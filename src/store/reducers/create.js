import {CREATE_QUIZ_QUESTION, RESET_QUIZ_CREATOR} from "../actions/actionTypes"

const initialState = {
	quiz: []
}

export default function createReducer(state = initialState, action) {
	switch (action.type) {
		case CREATE_QUIZ_QUESTION:
			return {
				...state,
				quiz: [...state.quiz, action.item]
			}
		case RESET_QUIZ_CREATOR:
			return {
				...state,
				quiz: []
			}
		// case :
		// 	return {
		// 		...state
		// 	}
		// case :
		// 	return {
		// 		...state
		// 	}
		default:
			return state
	}
}