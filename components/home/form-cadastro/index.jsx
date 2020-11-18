import React, { Component } from 'react';
import Router from 'next/router';
import styles from './form-register.module.css';
import { TextField, Button, FormControl, Input, InputLabel, Select, MenuItem } from '@material-ui/core/';

import cn from 'classnames';

export default class FormRegister extends Component {
	constructor(props) {
		super(props);

		this.state = {
			clients: {
				nome: '',
				cpf_cnpj: '',
				dataRef: '',
				endereco: '',
				bairro: '',
				cidade: '',
				estado: '',
				cep: '',
				email: '',
				telefone: '',
				password: '',
				rePassword: '',
				ativo: true
			},
			erro: null
		};
	}

	render() {
		return (
			<main className={styles.main}>
				<div className={styles.container}>
					<section className={cn(styles.sectionForm, this.state.activeForm ? styles.invisible : null)}>
						<h3 className={this.classForms}>Dados Pessoais / Empresariais</h3>

						<form onSubmit={this.proximaAba}>
							<TextField
								typeof="text"
								className={styles.inputForms}
								id="inputName"
								name="nome"
								label="Nome Completo / Razão Social"
								required
								onChange={this.handleInputChange}
							/>
							<br />
							<br />
							<TextField
								className={styles.inputForms}
								type="email"
								name="email"
								label="E-mail"
								minLength="3"
								maxLength="255"
								required
								onChange={this.handleInputChange}
							/>
							<br />
							<br />

							<TextField
								className={styles.inputForms}
								name="cpf_cnpj"
								label="CPF / CNPJ"
								minLength="11"
								maxLength="14"
								required
								onChange={this.handleInputChange}
							/>
							<br />
							<br />
							<br />
							<TextField
								className={styles.inputForms}
								type="date"
								name="dataRef"
								label="Data de Nascimento / Abertura"
								InputLabelProps={{
									shrink: true
								}}
								minLength="10"
								maxLength="10"
								required
								onChange={this.handleInputChange}
							/>
							<br />
							<br />
							<TextField
								className={styles.inputForms}
								name="telefone"
								label="Telefone Celular"
								minLength="10"
								maxLength="11"
								required
								onChange={this.handleInputChange}
							/>
							<br />
							<br />

							<div className={styles.containerFooter}>
								<Button type="submit" className={styles.buttonCustom} variant="contained">
									Prosseguir
								</Button>
							</div>
						</form>
					</section>
					<section className={cn(styles.sectionForm, this.state.activeForm ? null : styles.invisible)}>
						<h3 className={this.classForms}>Dados Pessoais / Empresariais</h3>
						<form onSubmit={this.handleSubmit}>
							<TextField
								className={styles.inputForms}
								name="cep"
								label="CEP"
								maxLength="8"
								required
								onChange={this.handleInputChange}
							/>

							<br />
							<br />
							<TextField
								className={styles.inputForms}
								name="endereco"
								label="Endereço"
								minLength="3"
								maxLength="255"
								required
								onChange={this.handleInputChange}
							/>

							<br />
							<br />
							<TextField
								className={styles.inputForms}
								name="bairro"
								label="Bairro"
								minLength="3"
								maxLength="100"
								required
								onChange={this.handleInputChange}
							/>

							<br />
							<br />
							<div className={styles.cidadeUF}>
								<TextField
									className={styles.inputCidade}
									name="cidade"
									label="Cidade"
									minLength="2"
									maxLength="100"
									required
									onChange={this.handleInputChange}
								/>
								<FormControl className={styles.selectUF}>
									<InputLabel className={styles.selectUF} id="demo-simple-select-label">
										UF
									</InputLabel>
									<Select
										className={styles.selectUF}
										labelId="select-label"
										id="selectEstado"
										name="estado"
										required
										onChange={this.handleInputChange}
									>
										<MenuItem value="AC">AC</MenuItem>
										<MenuItem value="AL">AL</MenuItem>
										<MenuItem value="AP">AP</MenuItem>
										<MenuItem value="AM">AM</MenuItem>
										<MenuItem value="BA">BA</MenuItem>
										<MenuItem value="CE">CE</MenuItem>
										<MenuItem value="DF">DF</MenuItem>
										<MenuItem value="ES">ES</MenuItem>
										<MenuItem value="GO">GO</MenuItem>
										<MenuItem value="MA">MA</MenuItem>
										<MenuItem value="MT">MT</MenuItem>
										<MenuItem value="MS">MS</MenuItem>
										<MenuItem value="MG">MG</MenuItem>
										<MenuItem value="PA">PA</MenuItem>
										<MenuItem value="PB">PB</MenuItem>
										<MenuItem value="PR">PR</MenuItem>
										<MenuItem value="PE">PE</MenuItem>
										<MenuItem value="PI">PI</MenuItem>
										<MenuItem value="RJ">RJ</MenuItem>
										<MenuItem value="RN">RN</MenuItem>
										<MenuItem value="RS">RS</MenuItem>
										<MenuItem value="RO">RO</MenuItem>
										<MenuItem value="RR">RR</MenuItem>
										<MenuItem value="SC">SC</MenuItem>
										<MenuItem value="SP">SP</MenuItem>
										<MenuItem value="SE">SE</MenuItem>
										<MenuItem value="TO">TO</MenuItem>
									</Select>
								</FormControl>
							</div>
							<br />
							<br />
							<div>
								<FormControl>
									<InputLabel htmlFor="labelPassword">Senha</InputLabel>
									<Input
										id="inputPassword"
										name="password"
										type="password"
										onChange={this.handleInputChange}
									/>
								</FormControl>
								<FormControl>
									<InputLabel className={styles.inputPassword} htmlFor="labelPassword">
										Redigite a Senha
									</InputLabel>
									<Input
										className={styles.inputPassword}
										id="inputRePassword"
										name="rePassword"
										type="password"
										onChange={this.handleInputChange}
									/>
								</FormControl>
							</div>
							<br />
							<span className={styles.erro}>{this.state.erro}</span>
							<br />
							<div className={styles.containerFooter}>
								<Button
									className={styles.buttonRetornar}
									variant="contained"
									onClick={() => this.retornarAba()}
								>
									Retornar
								</Button>
								<Button type="submit" className={styles.buttonCustom} variant="contained">
									Enviar Dados
								</Button>
							</div>
						</form>
					</section>
					<section className={styles.sectionImg}>
						<img src="../../img/detail-register-cpf.png" />
					</section>
				</div>
			</main>
		);
	}

	handleInputChange = (event) => {
		const target = event.target;
		const name = target.name;
		const value = target.value;

		this.setState((prevState) => ({
			clients: { ...prevState.clients, [name]: value }
		}));
	};

	proximaAba = (event) => {
		const currentState = this.state.activeForm;
		this.setState({ activeForm: !currentState });
		event.preventDefault();
	};

	retornarAba() {
		const currentState = this.state.activeForm;
		this.setState({ activeForm: !currentState });
	}

	handleSubmit = (event) => {
		console.log(JSON.stringify(this.state.clients));
		fetch(`${process.env.REACT_APP_API_URL}/clientes`, {
			method: 'post',
			body: JSON.stringify(this.state.clients),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => {
			if (response.status === 200) {
				response.json().then((json) => {
					if (json != null) {
						localStorage.setItem('id', json.id);
						localStorage.setItem('nome', json.nome);
						localStorage.setItem('login', true);
						Router.push('/dashboard/main');
					}
				});
			} else {
				this.setState({ erro: 'CPF/CNPJ ou e-mail já utilizado em outro cadastro.' });
			}
		});

		event.preventDefault();
	};
}
