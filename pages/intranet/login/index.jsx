import React, { Component } from 'react';
import Sidebar from '../../../components/intranet/sidebar';
import styles from './login.module.css';
import { TextField, Button, FormControl, Input, InputLabel } from '@material-ui/core/';

export default class login extends React.Component {
	state = {
		clients: {
			id: '',
			nome: '',
			cpf_cnpj: '',
			password: '',
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
		fetch(`${process.env.REACT_APP_API_URL}/intranet/login/` + this.state.clients.cpf_cnpj, {
			method: 'post',
			body: JSON.stringify(this.state.clients),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			response
				.json()
				.then((json) => {
					if (json != null) {
						localStorage.setItem('id', json.id);
						localStorage.setItem('nome', json.nome);
						localStorage.setItem('login', true);
						Router.push('/dashboard/conta/visao_geral');
					}
				})
				.catch(this.setState({ erro: 'Usuário ou senha incorreta.' }));
		});

		event.preventDefault();
	};

	render() {
		return (
			<div className={styles.container}>
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

							<Button type="submit" className={styles.buttonCustom} variant="contained">
								Acessar minha conta
							</Button>
						</form>
					</div>
				</main>
			</div>
		);
	}
}
