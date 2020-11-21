import React, { Component } from 'react';
import styles from './bitcoin_stock_complete.module.css';
import cn from 'classnames';

export default class BitcoinStockComplete extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={cn(styles.containerBitcoin, this.props.color)}>
				<div className={styles.criptoCoin}>
					<img src={'/img/' + this.props.icon} alt={this.props.coin} />
					<h6 className={styles.coin}>{this.props.coin}</h6>
				</div>
				<table>
					<tr>
						<th>
							<h6>Valor Aplicado</h6>
						</th>
						<th>
							<h6>Valor Atual Líquido</h6>
						</th>
						<th>
							<h6>Rentabilidade Líquida</h6>
						</th>
					</tr>
					<tr>
						<td>
							<h6 className={styles.valor}>
								{' '}
								{parseFloat(this.props.valor_aplicado).toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL'
								})}
							</h6>
						</td>
						<td>
							<h6 className={styles.valor}>
								{parseFloat(this.props.valor_total).toLocaleString('pt-BR', {
									style: 'currency',
									currency: 'BRL'
								})}
							</h6>
						</td>
						<td>
							<h6 className={this.props.valor_rentabilidade > 0 ? 'color-blue' : 'color-red'}>
								{parseFloat(this.props.valor_rentabilidade).toLocaleString() + '%'}
							</h6>
						</td>
					</tr>
				</table>
			</div>
		);
	}
}
