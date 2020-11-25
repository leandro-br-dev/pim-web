import { Component } from 'react';
import styles from './investimentos.module.css';

import Head from 'next/head';
import Header from '../../../../components/dashboard/header';
import Sidebar from '../../../../components/dashboard/sidebar';
import Title from '../../../../components/dashboard/title';
import BitcoinStockComplete from '../../../../components/dashboard/bitcoin_stock_complete';

export default class Investimentos extends Component {
	state = {
		bitcoin: {},
		litecoin: {},
		zcash: {},
		ethereum: {}
	};

	async consultaInvestimentos(cpf_cnpj) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/investimentos/${cpf_cnpj}`);
		const json = await data.json();
		if (json != null) {
			json.forEach((moeda) => {
				if (moeda.id == 1) {
					this.setState({ bitcoin: moeda });
				}
				if (moeda.id == 2) {
					this.setState({ litecoin: moeda });
				}
				if (moeda.id == 3) {
					this.setState({ zcash: moeda });
				}
				if (moeda.id == 4) {
					this.setState({ ethereum: moeda });
				}
			});
		}
	}

	async componentDidMount() {
		const cpf_cnpj = await localStorage.getItem('cpf_cnpj');
		await this.consultaInvestimentos(cpf_cnpj);
	}

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
							valor_aplicado={this.state.bitcoin.vl_investimento_inic}
							valor_total={this.state.bitcoin.vl_investimento_atual}
							valor_rentabilidade={
								(this.state.bitcoin.vl_investimento_atual / this.state.bitcoin.vl_investimento_inic -
									1) *
								100
							}
						/>

						<BitcoinStockComplete
							color="border-left-green"
							coin="Litecoin"
							icon="icon_litecoin.png"
							valor_aplicado={this.state.litecoin.vl_investimento_inic}
							valor_total={this.state.litecoin.vl_investimento_atual}
							valor_rentabilidade={
								(this.state.litecoin.vl_investimento_atual / this.state.litecoin.vl_investimento_inic -
									1) *
								100
							}
						/>

						<BitcoinStockComplete
							color="border-left-blue"
							coin="Zcash"
							icon="icon_zcash.png"
							valor_aplicado={this.state.zcash.vl_investimento_inic}
							valor_total={this.state.zcash.vl_investimento_atual}
							valor_rentabilidade={
								(this.state.zcash.vl_investimento_atual / this.state.zcash.vl_investimento_inic - 1) *
								100
							}
						/>

						<BitcoinStockComplete
							color="border-left-red"
							coin="Ethereum"
							icon="icon_etherium.png"
							valor_aplicado={this.state.ethereum.vl_investimento_inic}
							valor_total={this.state.ethereum.vl_investimento_atual}
							valor_rentabilidade={
								(this.state.ethereum.vl_investimento_atual / this.state.ethereum.vl_investimento_inic -
									1) *
								100
							}
						/>
					</div>
				</main>
			</div>
		);
	}
}
