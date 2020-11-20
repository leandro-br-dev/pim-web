import React, { Component } from 'react';
import styles from './title.module.css';

export default class Title extends Component {
	state = {};
	render() {
		return (
			<section className={styles.sectionTitle}>
				<h5>
					<i>Minha Conta</i>
				</h5>
				<div>
					<a href="/dashboard/conta/visao_geral">
						<h6>Visão Geral</h6>
					</a>
					<a href="/dashboard/conta/conta_corrente">
						<h6>Conta Corrente</h6>
					</a>
					<a href="/dashboard/conta/investimentos">
						<h6>Meus Investimentos</h6>
					</a>
				</div>
			</section>
		);
	}
}
