import React, { Component } from 'react';
import styles from './list_clients.module.css';
import { Help, FilterList } from '@material-ui/icons';
import { Button } from '@material-ui/core/';

class Linha extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.cpf_cnpj}</td>
				<td>{this.props.nome}</td>
			</tr>
		);
	}
}

export default class list_clients extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		linhasClientes: []
	};

	async carregaClientes(base) {
		const linhas = [];

		base.forEach((element) => {
			linhas.push(<Linha id={element.id} cpf_cnpj={element.cpf_cnpj} nome={element.nome} />);
		});

		await this.setState({ linhasClientes: linhas });
	}

	async componentDidMount() {
		await this.carregaClientes(this.props.base);
	}

	render() {
		return (
			<div>
				<table className={styles.geral}>
					<tr>
						<td>Clientes</td>
						<td />
						<td>
							<div className={styles.button}>
								<Button variant="contained" href="/intranet/cadastro">
									<FilterList className={styles.icon} color="white" fontSize="small" />Filtro
								</Button>
							</div>
						</td>
					</tr>
					<tr>
						<thead>
							<th>#</th>
							<th>CPF/CNPJ</th>
							<th>CLIENTE</th>
						</thead>
					</tr>
					<tr>
						<tbody>{this.state.linhasClientes}</tbody>
					</tr>
				</table>
			</div>
		);
	}
}
