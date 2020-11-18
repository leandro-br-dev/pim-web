import React, { Component } from 'react';
import Router from 'next/router';
import styles from './form-login.module.css';
import { TextField, Button, FormControl, Input, InputLabel } from '@material-ui/core/';

export default class FormLogin extends Component {
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
		fetch(`${process.env.REACT_APP_API_URL}/clientes/login/` + this.state.clients.cpf_cnpj, {
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
						Router.push('/dashboard/main');
					}
				})
				.catch(this.setState({ erro: 'Usuário ou senha incorreta.' }));
		});

		event.preventDefault();
	};

	render() {
		return (
			<main className={styles.main}>
				<section className={styles.sectionConteudo}>
					<section className={styles.sectionForm}>
						<h5>
							<b>Seja bem-vindo.</b>
						</h5>
						<h6>Realize seu login para continuar</h6>
						<br />
						<br />
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
							<br />
							<br />
							<br />

							<a href="#" target="_self">
								<h6 className={styles.link}>Esqueci minha senha</h6>
							</a>
						</form>
					</section>

					<section className={styles.sectionImagem}>
						<img src="../../img/grafic.jpg" />
					</section>
				</section>
			</main>
		);
	}
}
