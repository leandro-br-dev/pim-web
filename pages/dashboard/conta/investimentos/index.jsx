import { Component } from 'react';
import styles from './investimentos.module.css';

import Head from 'next/head';
import Header from '../../../../components/dashboard/header';
import Sidebar from '../../../../components/dashboard/sidebar';
import Title from '../../../../components/dashboard/title';
import BitcoinStockComplete from '../../../../components/dashboard/bitcoin_stock_complete';

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
				<Title pasta="conta" pagAtiva="investimentos" />
				<main className={styles.main}>
					<div>
						<BitcoinStockComplete
							color="border-left-yellow"
							coin="Bitcoin"
							icon="icon_bitcoin.png"
							valor_aplicado="30000.00"
							valor_total="40000.00"
							valor_rentabilidade="33.33"
						/>

						<BitcoinStockComplete
							color="border-left-green"
							coin="Litecoin"
							icon="icon_litecoin.png"
							valor_aplicado="8000.00"
							valor_total="10000.00"
							valor_rentabilidade="25.00"
						/>

						<BitcoinStockComplete
							color="border-left-blue"
							coin="Zcash"
							icon="icon_zcash.png"
							valor_aplicado="13000.00"
							valor_total="10000.00"
							valor_rentabilidade="-23.08"
						/>

						<BitcoinStockComplete
							color="border-left-red"
							coin="Etherium"
							icon="icon_etherium.png"
							valor_aplicado="25000.00"
							valor_total="30000.00"
							valor_rentabilidade="20.00"
						/>
					</div>
				</main>
			</div>
		);
	}
}
