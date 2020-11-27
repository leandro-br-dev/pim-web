import React, { Component } from 'react';
import Router from 'next/router';
import styles from './header.module.css';
import { TextField } from '@material-ui/core';
import { Search, PowerSettingsNew } from '@material-ui/icons';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			consultaCliente: ''
		};
		this.consultaCliente = this.consultaCliente.bind(this);
	}

	logout = (event) => {
		localStorage.setItem('id', '');
		localStorage.setItem('nome', '');
		localStorage.setItem('cpf_cnpj', '');
		localStorage.setItem('perfil', '');
		localStorage.setItem('login', false);
		localStorage.setItem('chave_acesso', '');
		Router.push('/intranet');
	};

	handleInputChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState({ consultaCliente: value });
		console.log(this.state.consultaCliente);
	};

	consultaCliente() {
		localStorage.setItem('consultaCliente', this.state.consultaCliente);
		Router.push('/intranet/cliente');
	}

	render() {
		return (
			<header className={styles.header}>
				<div>
					<TextField
						typeof="text"
						className={styles.inputForms}
						id="searchField"
						name="searchField"
						label="Localizar clientes..."
						onChange={this.handleInputChange}
					/>
					<Search className={styles.icon} fontSize="medium" onClick={this.consultaCliente} />
				</div>
				<div>
					<PowerSettingsNew className={styles.icon} fontSize="small" onClick={this.logout} />
				</div>
			</header>
		);
	}
}

export default Header;
