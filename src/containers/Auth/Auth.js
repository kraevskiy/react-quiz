import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends Component {
	loginHandler = () => {

	}
	registerHandler = () => {

	}
	submitHandler = event => {
		event.preventDefault()
	}
	render() {
		return (
			<div className={classes.Auth}>
				<div>
					<h1>Авторизация</h1>
					<form
						className={classes.AuthForm}
						onSubmit={this.submitHandler}>
						<Input
							label={'Emali'}
							// type={}
						/>
						<Input
							label={'Password'}
							// type={}
						/>

						<Button
							type="success"
							onclick={this.loginHandler}>Войти</Button>
						<Button
							type="primary"
							onclick={this.registerHandler}>Зарегистрироваться</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default Auth;