import { Component } from 'react';
import styles from './visao_geral.module.css';

import Head from 'next/head';
import Header from '../../../../components/dashboard/header';
import Sidebar from '../../../../components/dashboard/sidebar';
import Title from '../../../../components/dashboard/title';
import BitcoinStock from '../../../../components/dashboard/bitcoin_stock';
import ChartsPatrimony from '../../../../components/dashboard/charts';

export default class Register extends Component {
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
					<ChartsPatrimony />
					<BitcoinStock color="yellow" coin="Bitcoin" icon="icon_bitcoin.png" valor_aplicado="R$ 40.000,00" />
				</main>
			</div>
		);
	}
}
