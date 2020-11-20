import React, { Component } from 'react';
import styles from './account_balance.module.css';

export default class Account_balance extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={styles.saldo}>
				<table>
					<tr>
						<td />

						<td>
							<h5 className={styles.right}>Saldo Disponível</h5>
						</td>
					</tr>
					<tr className={styles.borderLine}>
						<td>
							<h5>Conta Corrente</h5>
						</td>
						<td>
							<h4 className={styles.right}>{this.props.valorDisponivel}</h4>
						</td>
					</tr>
					<tr className={styles.linhaDetalhe}>
						<td>
							<h6>Saldo Bloqueado</h6>
						</td>
						<td>
							<h6 className={styles.red}>{this.props.valorBloqueado}</h6>
						</td>
					</tr>
					<tr className={styles.linhaDetalhe}>
						<td>
							<h6>Lançamentos Futuros</h6>
						</td>
						<td>
							<h6 className={styles.right}>{this.props.valorLancamentos}</h6>
						</td>
					</tr>
					<tr className={styles.linhaDetalhe}>
						<td>
							<h6>SaldoTotal</h6>
						</td>
						<td>
							<h6 className={styles.right}>{this.props.valorSaldo}</h6>
						</td>
					</tr>
					<tr className={styles.borderLine}>
						<td>
							<a href="/dashboard/conta/conta_corrente">
								<button className={styles.btn_detalhes}>Extrato Completo</button>
							</a>
						</td>
						<td />
					</tr>
				</table>
			</div>
		);
	}
}
