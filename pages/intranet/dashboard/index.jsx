import React, { Component } from 'react';
import styles from './dashboard.module.css';
import Head from 'next/head';
import Sidebar from '../../../components/intranet/sidebar';
import Header from '../../../components/intranet/header';
import MenuStatics from '../../../components/intranet/menu_statics';
import ListClients from '../../../components/intranet/list_clients';
import PanelCriptocoins from '../../../components/intranet/panel_criptocoins';

export default class Dashboard extends Component {
	state = {
		listaClientes: {},
		tabelaClientes: []
	};

	async consultaClientes(cpf_cnpj) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/relatorios/clientes`);
		const json = await data.json();

		if (json != null) {
			await this.setState({ listaClientes: json });
		}
	}

	async carregaClientes() {
		const tabela = [];

		tabela.push(<ListClients relatorio="clientes" base={this.state.listaClientes} />);

		await this.setState({ tabelaClientes: tabela });
	}

	async componentDidMount() {
		await this.consultaClientes();

		await this.carregaClientes();
	}

	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Intranet Quantum Finance - Dashboard</title>
					<link rel="icon" href="/../../../favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Sidebar />
				<div className={styles.main}>
					<Header />
					<MenuStatics />
					<div className={styles.docker}>
						<div>{this.state.tabelaClientes}</div>
						<PanelCriptocoins />
					</div>

					<footer className={styles.footer}>
						<img className={styles.logoicon} src="/img/icon.png" alt="" />
					</footer>
				</div>
			</div>
		);
	}
}
