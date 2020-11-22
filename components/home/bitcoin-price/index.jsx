import React, { Component } from 'react';
import styles from './bitcoin-price.module.css';

export default class BitcoinPrice extends Component {
	state = {
		erro: '',
		bitcoinPrice: '',
		bitcoinValue: 0
	};

	async componentDidMount() {
		const data = await fetch('https://api.coindesk.com/v1/bpi/currentprice/brl.json');
		const json = await data.json();
		const { bpi } = await json;
		const { BRL } = await bpi;
		const { rate } = await BRL;
		await this.setState({
			bitcoinPrice: parseFloat(rate.replace(',', '')).toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			})
		});
		await this.setState({ bitcoinValue: parseFloat(rate.replace(',', '')) });

		console.log(rate);
	}

	render() {
		return (
			<div className={styles.BitcoinPrice}>
				<label htmlFor="">Preço da Unidade Bitcoin</label>
				<h2 style={{ color: 'var(--yellow-500)', fontSize: '3.4rem' }}>{this.state.bitcoinPrice}</h2>

				<h6>
					<b>51,61</b> bitcoins negociados nas últimas 24 horas
				</h6>
				<br />
				<h6>
					<b>R$50,00</b> compram <b>{(50 / this.state.bitcoinValue).toFixed(5)} Bitcoins</b>
				</h6>

				<div className={styles.focus}>
					<span>Taxa zero de depósitos</span>
					<br />
					<span>Mais de um milhão de clientes</span>
				</div>
			</div>
		);
	}
}
