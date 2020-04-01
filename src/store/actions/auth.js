import axios from 'axios'
import {AUTH_LOGOUT, AUTH_SUCCESS} from "./actionTypes";

export function auth(email, password, isLogin) {
	return async dispatch => {
		const authData = {
			email: email,
			password: password,
			returnSecureToken: true
		}

		let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAV9AbArezupzCv4jBg9sE5NPAoKegMiTo'

		if (isLogin) {
			url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAV9AbArezupzCv4jBg9sE5NPAoKegMiTo'
		}

		const response = await axios.post(url, authData)
		const data = response.data

		const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000)

		localStorage.setItem('token-quiz-creator', data.idToken)
		localStorage.setItem('userId-quiz-creator', data.localId)
		localStorage.setItem('expirationDate-quiz-creator', expirationDate)

		dispatch(authSuccess(data.idToken))
		dispatch(autoLogout(data.expiresIn))
	}
}

export function autoLogout(time) {
	return dispatch => {
		setTimeout(() => {
			dispatch(logout())
		}, time * 1000)
	}
}

export function logout() {
	localStorage.removeItem('token-quiz-creator')
	localStorage.removeItem('userId-quiz-creator')
	localStorage.removeItem('expirationDate-quiz-creator')
	return {
		type: AUTH_LOGOUT
	}
}

export function authSuccess(token) {
	return {
		type: AUTH_SUCCESS,
		token
	}
}