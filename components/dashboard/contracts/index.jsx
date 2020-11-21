import React, { Component } from 'react';
import styles from './contracts.module.css';
import cn from 'classnames';

export default class BitcoinStockComplete extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={cn(styles.containerContratos, this.props.color)}>
				<table>
					<tr>
						<th>
							<h6>Descrição</h6>
						</th>
						<th>
							<h6>Valor</h6>
						</th>
						<th>
							<h6>Data</h6>
						</th>
						<th>
							<h6>Documentos</h6>
						</th>
					</tr>
					<tr>
						<td>
							<h6 className={cn(styles.left, styles.descricao)}>{this.props.descricao}</h6>
						</td>
						<td>
							<h6 className={styles.left}>
								{parseFloat(this.props.valor).toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL'
								})}
							</h6>
						</td>
						<td>
							<h6 className={styles.right}>{this.props.data}</h6>
						</td>

						<td className={styles.center}>
							<a href={this.props.local_file}>
								<img src="/img/contracts.png" alt="contratos" />
							</a>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
