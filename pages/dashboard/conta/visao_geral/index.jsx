import { Component } from 'react';
import styles from './visao_geral.module.css';

import Head from 'next/head';
import Header from '../../../../components/dashboard/header';
import Sidebar from '../../../../components/dashboard/sidebar';
import Title from '../../../../components/dashboard/title';
import BitcoinStock from '../../../../components/dashboard/bitcoin_stock';
import ChartsPatrimony from '../../../../components/dashboard/charts';
import AccountBalance from '../../../../components/dashboard/account_balance';

export default class Visao_Geral extends Component {
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
				<Title pasta="conta" pagAtiva="visao_geral" />

				<main className={styles.main}>
					<section className={styles.middle}>
						<div className={styles.patrimonio}>
							<h6>Patrimônio Total</h6>
							<h4>R$ 100.000,00</h4>
							<ChartsPatrimony valorContaCorrente="10000" valorAplicado="90000" />
							<table className={styles.tableButton}>
								<tr className={styles.borderLine}>
									<td>
										<a href="/dashboard/conta/investimentos">
											<button className={styles.btn_detalhes}>Meus Investimentos</button>
										</a>
									</td>
									<td />
								</tr>
							</table>
						</div>
						<AccountBalance
							valorDisponivel="R$ 10.000,00"
							valorBloqueado="R$ 500,00"
							valorLancamentos="R$ 0,00"
							valorSaldo="R$ 10.500,00"
						/>
					</section>

					<div className={styles.listaInvestimentos}>
						<BitcoinStock
							color="border-left-yellow"
							coin="Bitcoin"
							icon="icon_bitcoin.png"
							valor_aplicado="R$ 40.000,00"
						/>
						<BitcoinStock
							color="border-left-green"
							coin="Litecoin"
							icon="icon_litecoin.png"
							valor_aplicado="R$ 10.000,00"
						/>
						<BitcoinStock
							color="border-left-blue"
							coin="Zcash"
							icon="icon_zcash.png"
							valor_aplicado="R$ 10.000,00"
						/>
						<BitcoinStock
							color="border-left-red"
							coin="Etherium"
							icon="icon_etherium.png"
							valor_aplicado="R$ 30.000,00"
						/>
					</div>
				</main>
			</div>
		);
	}
}
