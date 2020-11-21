import React, { Component } from 'react';
import styles from './bitcoin_stock.module.css';
import cn from 'classnames';

export default class BitcoinStock extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className={cn(styles.containerBitcoin, this.props.color)}>
				<img src={'/img/' + this.props.icon} alt={this.props.coin} />
				<h6 className={styles.coin}>{this.props.coin}</h6>

				<h6 className={styles.valor_aplicado}>{this.props.valor_aplicado}</h6>
				<a href="/home/homebroker">
					<button className={styles.btn_investir}>Investir</button>
				</a>
				<a href="/dashboard/conta/investimentos">
					<button className={styles.btn_detalhes}>Detalhes</button>
				</a>
			</div>
		);
	}
}
