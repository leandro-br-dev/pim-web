import { Component } from 'react';
import styles from './investimentos.module.css';

import Head from 'next/head';
import Header from '../../../../components/dashboard/header';
import Sidebar from '../../../../components/dashboard/sidebar';
import Title from '../../../../components/dashboard/title';

export default class Investimentos extends Component {
	state = {};
	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Quantum Finance - Seu banco digital de criptomoedas</title>
					<link rel="icon" href="/../../../favicon.ico" />
				</Head>

				<Header />
				<Sidebar />
				<Title />
				<main className={styles.main}>
					<div>
						<label> Bitcoin </label>
						<label> Valor Aplicado </label>
						<label> Total Atual Liquido </label>
						<label> Rentabilidade Liquida </label>
					</div>
					<div>
						<br />
						<label> R$ 30.000,00 </label>
						<label> R$ 40.000,00 </label>
						<label> 33,33 % </label>
					</div>
				</main>
			</div>
		);
	}
}
