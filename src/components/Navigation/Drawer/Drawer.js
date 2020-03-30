import React, {Component} from 'react';
import classes from './Drawer.module.css'
import Backdrop from "../../UI/BackDrop/BackDrop";
import {NavLink} from 'react-router-dom'

const links = [
	{to: '/', label: 'Список тестов', exact: true},
	{to: '/auth', label: 'Авторизация', exact: false},
	{to: '/quiz-creator', label: 'Создать тест', exact: false},
]

class Drawer extends Component {
	clickHandler = () => {
		this.props.onClose()
	}
	renderLinks() {
		return links.map((link, index) => {
			return (
				<li>
					<NavLink
						key={index}
						to={link.to}
						exact={link.exact}
						activeClassName={classes.active}
						onClick={this.clickHandler}
					>
						{link.label}
					</NavLink>
				</li>
			)
		})
	}

	render() {
		const cls = [classes.Drawer]
		if (!this.props.isOpen) {
			cls.push(classes.close)
		}
		return (
			<React.Fragment>
				<nav className={cls.join(' ')}>
					<ul>
						{this.renderLinks()}
					</ul>
				</nav>
				{
					this.props.isOpen
						? <Backdrop onClick={this.props.onClose}/>
						: null
				}
			</React.Fragment>
		);
	}
}

export default Drawer;