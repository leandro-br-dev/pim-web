import React, { Component } from 'react';
import styles from './bank_statement.module.css';

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		const name = product.stocked ? product.name : <span style={{ color: 'red' }}>{product.name}</span>;

		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}

export default class bank_statement extends Component {
	constructor(props) {
		super(props);
	}

	state = {
		linhas: ''
	};

	async carregaLinhas() {
		const rows = [];

		await this.props.movimentos.forEach((movimento) => {
			rows.push(<ProductRow product={movimento} key={movimento.name} />);
		});

		await this.setState({ linhas: rows });
	}

	render() {
		this.carregaLinhas();

		//console.log(linhas);

		return (
			<div className={styles.bank_statement}>
				<table>
					<thead>
						<tr>
							<th>Data</th>
							<th>Descrição</th>
							<th>Valor</th>
							<th>Saldo</th>
						</tr>
					</thead>
					<tbody>{this.state.linhas}</tbody>
				</table>
			</div>
		);
	}
}
