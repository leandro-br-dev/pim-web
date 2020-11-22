import React, { Component } from 'react';
import styles from './menu_statics.module.css';

export default class menu_statics extends Component {
	state = {};
	render() {
		return (
			<div className={styles.menu}>
				<div className={styles.DivInternas}>
					<h3>Ativos</h3>
					<br />
					<p className={styles.paragrafo1}>32%</p>
				</div>
				<div className={styles.DivInternas}>
					<h3>Inadimplentes</h3>
					<br />
					<p className={styles.paragrafo1}>42%</p>
				</div>
				<div className={styles.DivInternas}>
					<h3>Bloqueados</h3>
					<br />
					<p className={styles.paragrafo1}>52%</p>
				</div>
				<div className={styles.DivInternas}>
					<h3>Cancelados</h3>
					<br />
					<p className={styles.paragrafo1}>62%</p>
				</div>
			</div>
		);
	}
}
