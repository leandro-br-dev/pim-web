import React, { Component } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import Sidebar from '../../components/intranet/sidebar';
import styles from './relatorios.module.css';
import { TextField, Button, FormControl, Input, InputLabel } from '@material-ui/core/';

function makeid(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

export default class login extends React.Component {
	state = {
		clients: {
			cpf_cnpj: '',
			password: '',
			chave_acesso: makeid(12),
			ativo: true
		},
		erro: null
	};

	handleInputChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState((prevState) => ({
			clients: { ...prevState.clients, [name]: value }
		}));
	};

	handleSubmitAuthenticate = (event) => {
		fetch(`${process.env.REACT_APP_API_URL}/clientes/login/` + this.state.clients.cpf_cnpj, {
			method: 'put',
			body: JSON.stringify(this.state.clients),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			response.json().then((json) => {
				if (json != null && json.perfil != 'cliente') {
					localStorage.setItem('id', json.id);
					localStorage.setItem('nome', json.nome);
					localStorage.setItem('cpf_cnpj', json.cpf_cnpj);
					localStorage.setItem('chave_acesso', json.chave_acesso);
					localStorage.setItem('perfil', json.perfil);
					localStorage.setItem('login', true);
					Router.push('/intranet/dashboard');
				} else {
					this.setState({ erro: 'Usuário ou senha incorreta. Acesso permitido apenas para funcionários.' });
				}
			});
		});

		event.preventDefault();
	};

	render() {
		return (
			<div className={styles.container}>
				<Head>
					<title>Intranet Quantum Finance - Login</title>
					<link rel="icon" href="/../../../favicon.ico" />
					<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				</Head>
				<Sidebar />
				<main className={styles.main}>
					<div>
						<h1>QUANTUM FINANCE</h1>
						<br />
						<h4>PORTAL INTRANET</h4>

						<form onSubmit={this.handleSubmitAuthenticate}>
							<TextField
								typeof="text"
								className={styles.inputForms}
								id="inputCPF_CNPJ"
								name="cpf_cnpj"
								label="CPF / CNPJ"
								required
								onChange={this.handleInputChange}
							/>
							<br />
							<br />
							<br />
							<FormControl className={styles.inputForms}>
								<InputLabel htmlFor="labelPassword">Senha</InputLabel>
								<Input
									id="inputPassword"
									name="password"
									type="password"
									onChange={this.handleInputChange}
								/>
							</FormControl>
							<br />
							<br />
							<span className={styles.erro}>{this.state.erro}</span>
							<br />
							<br />

							<Button
								type="submit"
								className={styles.buttonCustom}
								variant="contained"
								onClick={this.handleSubmitAuthenticate}
							>
								Acessar
							</Button>
						</form>
					</div>
				</main>
			</div>
		);
	}
}
