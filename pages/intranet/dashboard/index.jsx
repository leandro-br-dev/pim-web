import React, { Component } from 'react';
import styles from './dashboard.module.css';
import Sidebar from '../../../components/intranet/sidebar';
import MenuStatics from '../../../components/intranet/menu_statics';

export default class Dashboard extends Component {
	state = {};
	render() {
		return (
			<div className={styles.container}>
				<Sidebar />
				<div className={styles.main}>
					<MenuStatics />
				</div>
			</div>
		);
	}
}
