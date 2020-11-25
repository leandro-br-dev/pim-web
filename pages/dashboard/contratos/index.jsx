import { Component } from 'react';
import styles from './contratos.module.css';

import Head from 'next/head';
import Header from '../../../components/dashboard/header';
import Sidebar from '../../../components/dashboard/sidebar';
import Title from '../../../components/dashboard/title';
import Contracts from '../../../components/dashboard/contracts';

export default class Investimentos extends Component {
	state = {
		constratos: [],
		listaContratos: [],
		conta: {}
	};

	async consultaConta(cpf_cnpj) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/contas/${cpf_cnpj}`);
		const json = await data.json();

		if (json != null) {
			await this.setState({ conta: json });
		}
	}

	async consultaContrato() {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/contratos/${this.state.conta.id}`);
		const json = await data.json();
		if (json != null) {
			await this.setState({ contratos: json });
			await this.carregaContratos();
		}
	}

	async carregaContratos() {
		const rows = [];

		await this.state.contratos.forEach((contrato) => {
			rows.push(
				<Contracts
					color="border-left-yellow"
					descricao={contrato.desc_contrato}
					valor={contrato.vl_contrato}
					data={contrato.dt_contrato}
					local_file={contrato.anexo_contrato}
				/>
			);
		});

		await this.setState({ listaContratos: rows });
	}

	async componentDidMount() {
		const cpf_cnpj = await localStorage.getItem('cpf_cnpj');
		await this.consultaConta(cpf_cnpj);
		await this.consultaContrato();
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
				<Title pasta="contrato" pagAtiva="investimentos" />
				<main className={styles.main}>
					<div className={styles.titulo}>
						<img src="/img/icon_etherium.png" alt="coin etherium" />
						<h5>Contratos Inteligentes</h5>
						<h6>Plataforma digital - Etherium</h6>
					</div>
					<div>{this.state.listaContratos}</div>
				</main>
			</div>
		);
	}
}
