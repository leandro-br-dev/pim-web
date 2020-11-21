import React, { Component } from 'react';
import styles from './bank_statement.module.css';

export default class bank_statement extends Component {
	state = {};
	render() {
		return (
			<div className={styles.bank_statement}>
				<table>
					<tr>
						<th>Data</th>

						<th>Descrição</th>
						<th>Valor</th>
						<th>Saldo</th>
					</tr>
					<tr>
						<td>
							<h6>18/04/2020</h6>
						</td>
						<td>
							<h6>Depósito</h6>
						</td>
						<td>
							<h6>R$ 500,00</h6>
						</td>
						<td>
							<h6>R$ 10.500,00</h6>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
