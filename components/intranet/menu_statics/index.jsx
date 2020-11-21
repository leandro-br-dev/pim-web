import React, { Component } from 'react';
import styles from './menu_statics.module.css';

export default class menu_statics extends Component {
	state = {};
	render() {
		return (
			<div className={styles.menu}>
				<div className={styles.DivA}>
					<h1>Ativos</h1>
					<br />
					<p>72%</p>
				</div>
				<div className={styles.DivB}>
					<h3>Inadimplentes</h3>
					<br />
					<p>72%</p>
				</div>
				<div className={styles.DivC}>
					<h1>Bloqueados</h1>
					<br />
					<p>72%</p>
				</div>
				<div className={styles.DivD}>
					<h1>Cancelados</h1>
					<br />
					<p>72%</p>
				</div>
			</div>
		);
	}
}
