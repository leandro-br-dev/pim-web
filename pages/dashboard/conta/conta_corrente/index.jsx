import React, { Component } from 'react';
import styles from './conta_corrente.module.css';
import { TextField } from '@material-ui/core/';

import Head from 'next/head';
import Header from '../../../../components/dashboard/header';
import Sidebar from '../../../../components/dashboard/sidebar';
import Title from '../../../../components/dashboard/title';
import BankStatement from '../../../../components/dashboard/bank_statement';

let newDate = new Date();
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

class LinhaMovimento extends React.Component {
	render() {
		const movimento = this.props.movimento;

		var date = new Date(movimento.dt_movim);

		return (
			<tr>
				<td>{date.toLocaleDateString()}</td>
				<td>{movimento.tipo_movim}</td>
				<td>
					{parseFloat(movimento.vl_lanc_movim).toLocaleString('pt-BR', {
						style: 'currency',
						currency: 'BRL'
					})}
				</td>
			</tr>
		);
	}
}

export default class Conta_Correntepx extends Component {
	state = {
		conta: {},
		movimentos: [],
		vl_disp_conta: 0,
		vl_bloq_conta: 0,
		vl_lanc_fut_conta: 0,
		vl_tot_conta: 0,
		dataInicio: year + '-' + month + '-' + date,
		dataFinal: year + '-' + month + '-' + date
	};

	async consultaConta(cpf_cnpj) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/contas/${cpf_cnpj}`);
		const json = await data.json();

		if (json != null) {
			await this.setState({ conta: json });
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

	async consultaExtrato(qtd_dias) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/movimentos/${this.state.conta.id}/${qtd_dias}`);
		const json = await data.json();
		if (json != null) {
			await this.setState({ movimentos: json });
			await this.carregaLinhas();
		}
	}

	async carregaLinhas() {
		const rows = [];

		await this.state.movimentos.forEach((movimento) => {
			rows.push(<LinhaMovimento movimento={movimento} key={movimento.id} />);
		});

		await this.setState({ linhas: rows });
	}

	async componentDidMount() {
		const cpf_cnpj = await localStorage.getItem('cpf_cnpj');
		await this.consultaConta(cpf_cnpj);
		await this.consultaExtrato(0);
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
				<Title pasta="conta" pagAtiva="conta_corrente" />
				<main className={styles.main}>
					<div className={styles.content}>
						<div className={styles.dadosflex}>
							<div className={styles.boxdados}>
								<h6>Saldo Disponível</h6>
								<h5>{this.state.vl_disp_conta}</h5>
							</div>
							<div className={styles.boxdados}>
								<h6>Saldo Bloqueado</h6>
								<h5>{this.state.vl_bloq_conta}</h5>
							</div>
							<div className={styles.boxdados}>
								<h6>Lançamentos Futuros</h6>
								<h5>{this.state.vl_lanc_fut_conta}</h5>
							</div>
							<div className={styles.boxdados}>
								<h6>Saldo Total</h6>
								<h5>{this.state.vl_tot_conta}</h5>
							</div>
						</div>

						<div className={styles.periodoBox}>
							<h6>Período</h6>
							<div className={styles.radioPeriodo}>
								<input
									className={styles.input}
									type="radio"
									id="Hoje"
									name="periodo"
									onClick={() => this.consultaExtrato(1)}
								/>
								<label for="Hoje">Hoje</label>

								<input
									className={styles.input}
									type="radio"
									id="7_dias"
									name="periodo"
									onClick={() => this.consultaExtrato(7)}
								/>
								<label for="7_dias">7 dias</label>

								<input
									className={styles.input}
									type="radio"
									id="15_dias"
									name="periodo"
									onClick={() => this.consultaExtrato(15)}
								/>
								<label for="15_dias">15 dias</label>

								<input
									className={styles.input}
									type="radio"
									id="30_dias"
									name="periodo"
									onClick={() => this.consultaExtrato(30)}
								/>
								<label for="30_dias">30 dias</label>

								<input
									className={styles.input}
									type="radio"
									id="60_dias"
									name="periodo"
									onClick={() => this.consultaExtrato(60)}
								/>
								<label for="60_dias">60 dias</label>

								<input
									className={styles.input}
									type="radio"
									id="90_dias"
									name="periodo"
									onClick={() => this.consultaExtrato(90)}
								/>
								<label for="90_dias">90 dias</label>
							</div>

							<div className={styles.dates}>
								<TextField
									type="date"
									name="dataRef"
									label="De"
									InputLabelProps={{
										shrink: true
									}}
									minLength="10"
									maxLength="10"
									required
									defaultValue={this.state.dataInicio}
								/>{' '}
								<TextField
									type="date"
									name="dataRef"
									label="Até"
									InputLabelProps={{
										shrink: true
									}}
									minLength="10"
									maxLength="10"
									required
									defaultValue={this.state.dataFinal}
								/>
							</div>
							<div className={styles.bank_statement}>
								<table>
									<thead>
										<tr>
											<th>Data</th>
											<th>Descrição</th>
											<th>Valor</th>
										</tr>
									</thead>
									<tbody>{this.state.linhas}</tbody>
								</table>
							</div>
						</div>
					</div>
				</main>
			</div>
		);
	}
}
