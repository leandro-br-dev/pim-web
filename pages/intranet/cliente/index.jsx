import React, { Component } from 'react';
import styles from './cliente.module.css';
import Head from 'next/head';
import Sidebar from '../../../components/intranet/sidebar';
import Header from '../../../components/intranet/header';
import MenuStatics from '../../../components/intranet/menu_statics';

export default class Findclient extends Component {
	state = {
		cliente: {},
		conta: '',
		situacao: '',
		financeiro: {},
		rentabilidade: 0,
		atraso: 0
	};

	async consultaConta(cpf_cnpj) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/contas/${cpf_cnpj}`);
		const json = await data.json();

		if (json != null) {
			await this.setState({ conta: json.id });
			if (json.ativo == 0) {
				await this.setState({ situacao: 'Inativo' });
			}
			if (json.ativo == 1) {
				await this.setState({ situacao: 'Ativo' });
			}
			if (json.ativo == 2) {
				await this.setState({ situacao: 'Inadimplente' });
			}
			if (json.ativo == 3) {
				await this.setState({ situacao: 'Bloqueado' });
			}
			if (json.ativo == 4) {
				await this.setState({ situacao: 'Cancelado' });
			}
		}
	}

	async consultaCliente(cpf_cnpj) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/clientes/${cpf_cnpj}`);
		const json = await data.json();

		if (json != null) {
			this.setState({ cliente: await json });
		}
	}

	async consultaFinanceiro(id_conta) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/receitas/${id_conta}`);
		const json = await data.json();

		if (json != null) {
			json.forEach((registro) => {
				const { financeiro } = registro;

				if (registro.confirma_efetivacao == true) {
					this.setState({
						rentabilidade: parseFloat(financeiro).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					});
				}
				if (registro.confirma_efetivacao == false) {
					this.setState({
						atraso: parseFloat(financeiro).toLocaleString('pt-BR', {
							style: 'currency',
							currency: 'BRL'
						})
					});
				}
			});
		}
	}

	async componentDidMount() {
		const cpf_cnpj = localStorage.getItem('consultaCliente');
		await this.consultaCliente(cpf_cnpj);
		await this.consultaConta(cpf_cnpj);
		await this.consultaFinanceiro(this.state.conta);
	}

	render() {
		return (
			<main className={styles.mainbg}>
				<Head>
					<title>Intranet Quantum Finance - Perfil do Cliente</title>
					<link rel="icon" href="/../../../favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<div className={styles.container}>
					<Sidebar />
					<div className={styles.main}>
						<Header />
						<MenuStatics />
						<div className={styles.docker}>
							<div>
								<h2>Dados Pessoais</h2>
								<table className={styles.geral}>
									<tr className={styles.tabeladadosclient}>
										<th>Cliente:</th>
										<td>{this.state.cliente.nome}</td>
									</tr>
									<tr className={styles.tabeladadosclient}>
										<th>CFP/CNPJ:</th>
										<td>{this.state.cliente.cpf_cnpj}</td>
									</tr>
									<tr className={styles.tabeladadosclient}>
										<th>Data de Nasc. / Constituição:</th>
										<td>{this.state.cliente.dataRef}</td>
									</tr>
									<tr className={styles.tabeladadosclient}>
										<th>Telefone:</th>
										<td>{this.state.cliente.telefone}</td>
									</tr>
									<tr className={styles.tabeladadosclient}>
										<th>E-mail:</th>
										<td>{this.state.cliente.email}</td>
									</tr>
								</table>
							</div>
							<div>
								<h2>Situação Cliente</h2>
								<table className={styles.geral}>
									<tr className={styles.tabeladadosclient}>
										<th>Situação:</th>
										<td>{this.state.situacao}</td>
									</tr>
									<tr className={styles.tabeladadosclient}>
										<th>Rentabilidade:</th>
										<td>{this.state.rentabilidade}</td>
									</tr>
									<tr className={styles.tabeladadosclient}>
										<th>Em Atraso:</th>
										<td>{this.state.atraso}</td>
									</tr>
								</table>
							</div>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
