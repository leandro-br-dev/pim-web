import React, { Component } from 'react';
import Router from 'next/router';
import styles from './form-login.module.css';
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

export default class FormLogin extends Component {
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
				if (json != null) {
					console.log(json);
					localStorage.setItem('id', json.id);
					localStorage.setItem('nome', json.nome);
					localStorage.setItem('cpf_cnpj', json.cpf_cnpj);
					localStorage.setItem('chave_acesso', json.chave_acesso);
					localStorage.setItem('login', true);
					Router.push('/dashboard/conta/visao_geral');
				} else {
					this.setState({ erro: 'Usuário ou senha incorreta.' });
				}
			});
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
