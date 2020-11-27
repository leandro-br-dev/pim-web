import React from 'react';
import Router from 'next/router';
import styles from './header.module.css';
import { PowerSettingsNew } from '@material-ui/icons';

export default class header extends React.Component {
	state = {
		strNome: '',
		strPrimeiraLetra: '',
		strUltimaLetra: '',
		strId: ''
	};

	logout = (event) => {
		localStorage.setItem('id', '');
		localStorage.setItem('nome', '');
		localStorage.setItem('cpf_cnpj', '');
		localStorage.setItem('login', false);
		localStorage.setItem('chave_acesso', '');
		Router.push('/');
	};

	async componentDidMount() {
		const primeiraLetra = localStorage.getItem('nome').split(' ')[0].substring(0, 1);
		const ultimaLetra = localStorage
			.getItem('nome')
			.split(' ')
			[localStorage.getItem('nome').split(' ').length - 1].substring(0, 1);
		const nome = localStorage.getItem('nome');
		const id = localStorage.getItem('id');

		this.setState({ strNome: nome });
		this.setState({ strPrimeiraLetra: primeiraLetra });
		this.setState({ strUltimaLetra: ultimaLetra });
		this.setState({ strId: id });

		const data = await fetch(`${process.env.REACT_APP_API_URL}/clientes/${id}`);
		const json = await data.json();
		if (json != null && json.chave_acesso != localStorage.getItem('chave_acesso')) {
			this.logout;
			Router.push('/home/login');
			alert('Conexão perdida! Por favor logue novamente.');
		}
	}

	render() {
		return (
			<header className={styles.header}>
				<nav className={styles.navLeft}>
					<img src="../../img/icon.png" />
					<h5>Quantum Finance</h5>
				</nav>

				<nav className={styles.navRight}>
					<div className={styles.circle}>
						<h6 className={styles.iniciais}>
							{this.state.strPrimeiraLetra}
							{this.state.strUltimaLetra}
						</h6>
					</div>
					<div>
						<h6 className={styles.nome}>{this.state.strNome}</h6>

						<div className={styles.row}>
							<h6 className={styles.labelCodigo}>Código do Cliente: </h6>
							<h6 className={styles.codigo}>{this.state.strId}</h6>
						</div>
					</div>
					<div className={styles.logout} onClick={this.logout}>
						<PowerSettingsNew />
						<h6>Sair</h6>
					</div>
				</nav>
			</header>
		);
	}
}
