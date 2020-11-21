import React, { Component } from 'react';
import Sidebar from '../../../components/intranet/sidebar';
import styles from './login.module.css';

export default class login extends React.Component {
	render() {
		return (
			<main className={styles.content}>
				<Sidebar />
				<div className={styles.log}>
					<h2>QUANTUM FINANCE</h2>

					<h4>PORTAL INTRANET</h4>

					<form>
						<p className={styles.title}>CPF</p>
						<input type="number" max="15" />
						<p>Somente números</p>
						<p className={styles.title}>Senha</p>
						<input type="number" />
						<p>Somente números</p>
					</form>
				</div>
			</main>
		);
	}
}
