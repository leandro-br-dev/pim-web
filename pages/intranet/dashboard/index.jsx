import React, { Component } from 'react';
import styles from './dashboard.module.css';
import Sidebar from '../../../components/intranet/sidebar';
import MenuStatics from '../../../components/intranet/menu_statics';
import ListClients from '../../../components/intranet/list_clients';
import PanelCriptocoins from '../../../components/intranet/panel_criptocoins';

export default class Dashboard extends Component {
	state = {};
	render() {
		return (
			<div className={styles.container}>
				<Sidebar />
				<div className={styles.main}>
					<MenuStatics />
					<div className={styles.docker}>
						<ListClients />
						<PanelCriptocoins />
					</div>

					<footer className={styles.footer}>
						<img className={styles.logoicon} src="/img/icon.png" alt="" />
					</footer>
				</div>
			</div>
		);
	}
}
