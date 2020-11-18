import React, { Component } from 'react';
import styles from './title.module.css';

export default class Title extends Component {
	state = {};
	render() {
		return (
			<section className={styles.sectionTitle}>
				<h6>Minha Conta / Visão Geral</h6>
			</section>
		);
	}
}
