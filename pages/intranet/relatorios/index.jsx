import React, { Component } from 'react';
import { withRouter } from 'next/router';
import styles from './relatorios.module.css';
import Head from 'next/head';
import Sidebar from '../../../components/intranet/sidebar';
import MenuStatics from '../../../components/intranet/menu_statics';
import ListClients from '../../../components/intranet/list_clients';

let queryString = '';

const Titulo = withRouter((props) => {
	queryString = props.router.query.consulta;
	return <h1>{props.router.query.consulta}</h1>;
});

export default class Relatorios extends Component {
	state = {
		tabelaClientes: [],
		listaClientes: {}
	};

	async consultaRelatorios(queryString) {
		const data = await fetch(`${process.env.REACT_APP_API_URL}/relatorios/${queryString}`);
		const json = await data.json();

		if (json != null) {
			await this.setState({ listaClientes: json });
		}
	}

	async carregaClientes() {
		const tabela = [];

		tabela.push(<ListClients relatorio={queryString} base={this.state.listaClientes} />);

		await this.setState({ tabelaClientes: tabela });
	}

	async componentDidMount() {
		await console.log(queryString);
		await this.consultaRelatorios(queryString);
		await this.carregaClientes();
	}

	render() {
		return (
			<main className={styles.mainbg}>
				<div className={styles.container}>
					<Sidebar />
					<div className={styles.main}>
						<MenuStatics />
						<div className={styles.docker}>
							<Titulo />
							<table className={styles.geral}>{this.state.tabelaClientes}</table>
						</div>
					</div>
				</div>
			</main>
		);
	}
}
