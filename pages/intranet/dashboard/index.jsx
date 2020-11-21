import React, { Component } from 'react';
import styles from './dashboard.module.css';
import MenuStatics from '../../../components/intranet/menu_statics';

export default class Dashboard extends Component {
	state = {};
	render() {
		return (
			<div>
				<MenuStatics />
				<h1>Hello World</h1>
			</div>
		);
	}
}
