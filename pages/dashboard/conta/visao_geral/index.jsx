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
	state = {
		vl_patrimonio: 0,
		vl_disp_conta: 0,
		vl_bloq_conta: 0,
		vl_lanc_fut_conta: 0,
		vl_tot_conta: 0,
		vl_investimento_bitcoin: 0,
		vl_investimento_litecoin: 0,
		vl_investimento_zcash: 0,
		vl_investimento_ethereum: 0,
		vl_tot_moeda: 0
	};

	async consultaConta(cpf_cnpj) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/contas/${cpf_cnpj}`);
		const json = await data.json();

		if (json != null) {
			await this.setState({
				vl_disp_conta: parseFloat(json.vl_disp_conta).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				})
			});

			await this.setState({
				vl_bloq_conta: parseFloat(json.vl_bloq_conta).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				})
			});

			await this.setState({
				vl_lanc_fut_conta: parseFloat(json.vl_lanc_fut_conta).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				})
			});

			await this.setState({
				vl_tot_conta: parseFloat(json.vl_tot_conta).toLocaleString('pt-BR', {
					style: 'currency',
					currency: 'BRL'
				})
			});

			return json.vl_tot_conta;
		}
	}

	async consultaInvestimentos(cpf_cnpj) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/investimentos/${cpf_cnpj}`);
		const json = await data.json();
		if (json != null) {
			json.forEach((moeda) => {
				if (moeda.id == 1) {
					this.setState({
						vl_investimento_bitcoin: parseFloat(moeda.vl_investimento_atual).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					});
					this.setState({ vl_tot_moeda: moeda.vl_investimento_atual + this.state.vl_tot_moeda });
				}
				if (moeda.id == 2) {
					this.setState({
						vl_investimento_litecoin: parseFloat(moeda.vl_investimento_atual).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					});
					this.setState({ vl_tot_moeda: moeda.vl_investimento_atual + this.state.vl_tot_moeda });
				}
				if (moeda.id == 3) {
					this.setState({
						vl_investimento_zcash: parseFloat(moeda.vl_investimento_atual).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					});
					this.setState({ vl_tot_moeda: moeda.vl_investimento_atual + this.state.vl_tot_moeda });
				}
				if (moeda.id == 4) {
					this.setState({
						vl_investimento_ethereum: parseFloat(moeda.vl_investimento_atual).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					});
					this.setState({ vl_tot_moeda: moeda.vl_investimento_atual + this.state.vl_tot_moeda });
				}
			});
		}
	}

	async componentDidMount() {
		const cpf_cnpj = await localStorage.getItem('cpf_cnpj');

		const vl_total_conta = await this.consultaConta(cpf_cnpj);

		await this.consultaInvestimentos(cpf_cnpj);

		await this.setState({
			vl_patrimonio: parseFloat(vl_total_conta + this.state.vl_tot_moeda).toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			})
		});
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
				<Title pasta="conta" pagAtiva="visao_geral" />

				<main className={styles.main}>
					<section className={styles.middle}>
						<div className={styles.patrimonio}>
							<h6>Patrimônio Total</h6>
							<h4>{this.state.vl_patrimonio}</h4>
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
							valorDisponivel={this.state.vl_disp_conta}
							valorBloqueado={this.state.vl_bloq_conta}
							valorLancamentos={this.state.vl_lanc_fut_conta}
							valorSaldo={this.state.vl_tot_conta}
						/>
					</section>

					<div className={styles.listaInvestimentos}>
						<BitcoinStock
							color="border-left-yellow"
							coin="Bitcoin"
							icon="icon_bitcoin.png"
							valor_aplicado={this.state.vl_investimento_bitcoin}
						/>
						<BitcoinStock
							color="border-left-green"
							coin="Litecoin"
							icon="icon_litecoin.png"
							valor_aplicado={this.state.vl_investimento_litecoin}
						/>
						<BitcoinStock
							color="border-left-blue"
							coin="Zcash"
							icon="icon_zcash.png"
							valor_aplicado={this.state.vl_investimento_zcash}
						/>
						<BitcoinStock
							color="border-left-red"
							coin="Ethereum"
							icon="icon_etherium.png"
							valor_aplicado={this.state.vl_investimento_ethereum}
						/>
					</div>
				</main>
			</div>
		);
	}
}
