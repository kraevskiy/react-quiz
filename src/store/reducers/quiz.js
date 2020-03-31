import {FETCH_QUIZES_ERROR, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS} from "../actions/actionTypes";

const initialState = {
	quizes: [],
	loading: false,
	error: null
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
		default:
			return state
	}
}