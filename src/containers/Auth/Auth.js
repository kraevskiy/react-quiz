import React, {Component} from 'react';
import classes from './Auth.module.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends Component {

	state = {
		formControls: {
			email: {
				value: '',
				type: 'email',
				label: 'Email',
				errorMessage: 'Введите коректны Email',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				value: '',
				type: 'password',
				label: 'Пароль',
				errorMessage: 'Введите коректны пароль',
				valid: false,
				touched: false,
				validation: {
					required: true,
					minLength: 6
				}
			}
		}
	}
	loginHandler = () => {

	}
	registerHandler = () => {

	}
	submitHandler = event => {
		event.preventDefault()
	}

	onChangeHandler = (event, controlName) => {
		console.log(controlName, event.target.value);
	}

	renderInputs(){
		return  Object.keys(this.state.formControls).map((controlName, index)=>{
			const control = this.state.formControls[controlName]
			return(
				<Input
					key={controlName + index}
					type={control.type}
					value={control.value}
					valid={control.value}
					touched={control.touched}
					label={control.label}
					shoudValidate={!!control.validation}
					erroMessage={control.errorMessage}
					onChange={event=>this.onChangeHandler(event, controlName)}
				/>
			)
		})

	}
	render() {
		return (
			<div className={classes.Auth}>
				<div>
					<h1>Авторизация</h1>
					<form
						className={classes.AuthForm}
						onSubmit={this.submitHandler}>
						{this.renderInputs()}

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