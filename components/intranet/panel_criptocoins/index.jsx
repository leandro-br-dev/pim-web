import React, { Component } from 'react';
import styles from './panel_criptocoins.module.css';

export default class PanelCriptocoins extends Component {
	state = {};

	async consultaPreco(coin) {
		const data = await fetch(`https://www.mercadobitcoin.net/api/${coin}/ticker/`);
		const json = await data.json();
		const { ticker } = await json;
		const { last } = await ticker;
		return last;
	}

	async componentDidMount() {
		const btc = await this.consultaPreco('BTC');

		await this.setState({
			bitcoinPrice: parseFloat(btc.replace(',', '')).toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			})
		});

		const eth = await this.consultaPreco('ETH');

		await this.setState({
			ethereumPrice: parseFloat(eth.replace(',', '')).toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			})
		});

		const ltc = await this.consultaPreco('LTC');

		await this.setState({
			litecoinPrice: parseFloat(ltc.replace(',', '')).toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			})
		});

		const xrp = await this.consultaPreco('XRP');

		await this.setState({
			zcashPrice: parseFloat(xrp.replace(',', '')).toLocaleString('pt-BR', {
				style: 'currency',
				currency: 'BRL'
			})
		});
	}

	render() {
		return (
			<section className={styles.criptocoins}>
				<table>
					<tbody>
						<tr>
							<th>
								<h5>Criptomoeda</h5>
							</th>
							<th />
						</tr>
						<tr>
							<td>
								<div>
									<img src="/img/icon_bitcoin.png" alt="bitcoin" />
									<h6>Bitcoin</h6>
								</div>
							</td>
							<td>
								<h6 className={styles.price}>{this.state.bitcoinPrice}</h6>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									<img src="/img/icon_litecoin.png" alt="litecoin" />
									<h6>Litecoin</h6>
								</div>
							</td>
							<td>
								<h6>{this.state.litecoinPrice}</h6>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									<img src="/img/icon_zcash.png" alt="zcash" />
									<h6>Zcash</h6>
								</div>
							</td>
							<td>
								<h6>{this.state.zcashPrice}</h6>
							</td>
						</tr>
						<tr>
							<td>
								<div>
									<img src="/img/icon_etherium.png" alt="etherium" />
									<h6>Ethereum</h6>
								</div>
							</td>
							<td>
								<h6>{this.state.ethereumPrice}</h6>
							</td>
						</tr>
					</tbody>
				</table>
			</section>
		);
	}
}
