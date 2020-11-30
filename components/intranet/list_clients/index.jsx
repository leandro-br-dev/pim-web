import React, { Component } from 'react';
import styles from './list_clients.module.css';
import { FilterList } from '@material-ui/icons';
import { Button } from '@material-ui/core/';

function makeid(length) {
	var result = '';
	var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

class Linha extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		linha: []
	};

	render() {
		let colunas = [];
		const registro = this.props.registro;

		Object.entries(registro).forEach(([ key, value ]) => {
			this.props.colunasConsultadas.forEach((coluna) => {
				if (coluna == key) {
					colunas.push(<td key={`coluna_${key + value + makeid(12)}`}>{value}</td>);
				}
			});
		});

		return <tr key={`coluna_${this.props.registro.id + makeid(12)}`}>{colunas}</tr>;
	}
}

class Cabecalho extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let cabecalhoRelatorio = [];
		const registro = this.props.registro;

		Object.entries(registro).forEach(([ key, value ]) => {
			this.props.colunasConsultadas.forEach((coluna) => {
				if (coluna == key) {
					cabecalhoRelatorio.push(<th>{key}</th>);
				}
			});
		});

		return <tr key={`coluna_${this.props.registro.id}`}>{cabecalhoRelatorio}</tr>;
	}
}

export default class list_clients extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		linhasClientes: [],
		cabecalho: []
	};

	async carregaCabecalho(base, colunasConsultadas) {
		const linhas = [];

		linhas.push(<Cabecalho registro={base} key={`cabecalho_${base.id}`} colunasConsultadas={colunasConsultadas} />);

		await this.setState({ cabecalho: linhas });
	}

	async carregaClientes(base, colunasConsultadas) {
		const linhas = [];

		base.forEach((registro) => {
			linhas.push(
				<Linha registro={registro} key={`linha_${registro.id}`} colunasConsultadas={colunasConsultadas} />
			);
		});

		await this.setState({ linhasClientes: linhas });
	}

	async componentDidMount() {
		let colunasConsultadas = [];

		if (this.props.relatorio == 'clientes') {
			colunasConsultadas = [ 'id', 'nome', 'cpf_cnpj', 'email', 'telefone' ];
		}

		await this.carregaCabecalho(this.props.base[0], colunasConsultadas);
		await this.carregaClientes(this.props.base, colunasConsultadas);
	}

	render() {
		return (
			<div>
				<table className={styles.geral}>
					<thead>
						<tr>
							<th>Clientes</th>
							<th />
							<th>
								<div className={styles.button}>
									<Button variant="contained" href="/intranet/cadastro">
										<FilterList className={styles.icon} color="white" fontSize="small" />Filtro
									</Button>
								</div>
							</th>
						</tr>
					</thead>
				</table>
				<table className={styles.geral}>
					<thead>{this.state.cabecalho}</thead>

					<tbody>{this.state.linhasClientes}</tbody>
				</table>
			</div>
		);
	}
}
